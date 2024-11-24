import { fetchDataFromOda } from '../server/services/fetchData';
import prisma from '../server/prisma';

async function syncData() {
  const data = await fetchDataFromOda();

  try {
    const results = await prisma.sag.createMany({
      data: data.map((item) => ({
        id: item.id, 
        typeid: item.typeid,
        kategoriid: item.kategoriid || null,
        statusid: item.statusid,
        titel: item.titel || 'Untitled',
        titelkort: item.titelkort || null,
        offentlighedskode: item.offentlighedskode || 'N/A',
        nummer: item.nummer || null,
        nummerprefix: item.nummerprefix || null,
        nummernumerisk: item.nummernumerisk || null,
        nummerpostfix: item.nummerpostfix || null,
        resume: item.resume || 'No summary available.',
        afstemningskonklusion: item.afstemningskonklusion || null,
        periodeid: item.periodeid,
        afgorelsesresultatkode: item.afgørelsesresultatkode || null,
        baggrundsmateriale: item.baggrundsmateriale || null,
        opdateringsdato: new Date(item.opdateringsdato),
        statsbudgetsag: item.statsbudgetsag,
        begrundelse: item.begrundelse || null,
        paragrafnummer: item.paragrafnummer || null,
        paragraf: item.paragraf || null,
        afgorelsesdato: item.afgørelsesdato ? new Date(item.afgørelsesdato) : null,
        afgorelse: item.afgørelse || null,
        radsmodedato: item.rådsmødedato ? new Date(item.rådsmødedato) : null,
        lovnummer: item.lovnummer || null,
        lovnummerdato: item.lovnummerdato ? new Date(item.lovnummerdato) : null,
        retsinformationsurl: item.retsinformationsurl || null,
        fremsatundersagid: item.fremsatundersagid || null,
        deltundersagid: item.deltundersagid || null,
      })),
      skipDuplicates: true, 
    });

    console.log('Data synced successfully:', results);
  } catch (error) {
    console.error('Error syncing data:', error);
  } finally {
    await prisma.$disconnect(); 
  }
}

syncData();
