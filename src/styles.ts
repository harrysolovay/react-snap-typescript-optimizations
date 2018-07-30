import { css, injectGlobal } from 'emotion'

injectGlobal(`

  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

`)

export default css(`

  text-align: center;

  > header {

    background-color: #222;
    height: 150px;
    padding: 20px;
    color: white;

    > img {
      animation: logo-spin infinite 20s linear;
      height: 80px;
    }

    > h1 {
      font-size: 1.5em;
    }

  }

  > p {
    font-size: large;
  }

  @keyframes logo-spin {
    from { transform: rotate(0deg) }
    to { transform: rotate(360deg) }
  }

`)