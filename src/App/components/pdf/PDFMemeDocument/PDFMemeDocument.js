import React from 'react'
import PropTypes from 'prop-types';
import {Document, Page, View, Text} from '@react-pdf/renderer'
import PDFMemeSVGViewer from '../PDFMemeSVGViewer/PDFMemeSVGViewer';
function PDFMemeDocument(props) {
  return (
    <Document>
        <Page size="A4" orientation='landscape' >
            <View><Text style={{textAlign:'center'}}>{props.meme.titre}</Text></View>
            <View><PDFMemeSVGViewer meme={props.meme} image={props.image} /></View>
        </Page>
    </Document>
  )
}
PDFMemeDocument.proTypes={
    meme: PropTypes.object.isRequired,
    image: PropTypes.object
}
export default PDFMemeDocument