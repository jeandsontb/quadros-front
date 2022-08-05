import { TextField } from "@mui/material";
import Head from "next/head";

import styled from "styled-components";

const Button = styled.button<{ primary?: boolean }>`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Button>Normal</Button>
      <Button primary>Primary</Button>

      <main>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a> integrated with{" "}
          <a href="https://mui.com/">Material-UI!</a>
        </h1>
        <p>
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>
    </div>
  );
}
