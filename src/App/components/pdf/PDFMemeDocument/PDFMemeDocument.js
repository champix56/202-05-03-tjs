import React from 'react'
import PropTypes from 'prop-types';
import {Document, Page, View, Text} from '@react-pdf/renderer'
function PDFMemeDocument(props) {
  return (
    <Document>
        <Page size="A4" orientation='landscape' >
            <View><Text style={{textAlign:'center'}}>{props.meme.titre}</Text></View>
        </Page>
    </Document>
  )
}
PDFMemeDocument.proTypes={
    meme: PropTypes.object.isRequired,
    image: PropTypes.object
}
export default PDFMemeDocument