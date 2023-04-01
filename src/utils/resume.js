import * as pdfMake from "pdfmake/build/pdfmake";
import { TDocumentInformation } from "pdfmake/interfaces";


const document = TDocumentInformation();
pdfMake.createPdf()