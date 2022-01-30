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
                    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"/>

                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }

}
