import React, { ReactElement } from "react";
import Document, { DocumentInitialProps, DocumentContext } from 'next/document';
import { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    // static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    //     // ...
    // }

    render(): ReactElement {
        return (
            <Html>
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }

}
