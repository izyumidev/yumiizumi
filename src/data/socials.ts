const socials: Social[] = [
  {
    for: "twitter",
    link: "https://twitter.com/izyumidev",
    svg: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 248 204"
      aria-hidden="true"
      height="100%"
      width="100%"
    >
      <path
          d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04
        C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66
        c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64
        c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76
        c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26
        c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"
        fill="currentColor"
      />
    </svg>`,
    ariaLabel: "Visit my Twitter profile",
  },
  {
    for: "github",
    link: "https://github.com/izyumidev",
    svg: `
    <svg
      viewBox="0 0 98 96"
      xmlns="http://www.w3.org/2000/svg"
      style="transform: scale(1.08)"
      aria-hidden="true"
      height="100%"
      width="100%"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
        fill="currentColor"
      />
    </svg>`,
    ariaLabel: "Visit my GitHub profile",
  },
  {
    for: "mail",
    link: "mailto:mail@yumi.to",
    svg: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      aria-hidden="true"
      height="100%"
      width="100%"
    >
      <path
        fill="currentColor" 
        d="M424 80H88a56.06 56.06 0 0 0-56 56v240a56.06 56.06 0 0 0 56 56h336a56.06 56.06 0 0 0 56-56V136a56.06 56.06 0 0 0-56-56Zm-14.18 92.63l-144 112a16 16 0 0 1-19.64 0l-144-112a16 16 0 1 1 19.64-25.26L256 251.73l134.18-104.36a16 16 0 0 1 19.64 25.26Z"/>
    </svg>`,
    ariaLabel: "Send me an emai",
  },
  {
    for: "linkedin",
    link: "https://www.linkedin.com/in/yumi-izumi-b79bb7265/",
    svg: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15 15"
      aria-hidden="true"
      height="100%"
      width="100%"
    >
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M2 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2Zm1.05 5h1.9v6h-1.9V6Zm2.025-1.995a1.075 1.075 0 1 1-2.15 0a1.075 1.075 0 0 1 2.15 0ZM12 8.357c0-1.805-1.167-2.507-2.326-2.507a2.206 2.206 0 0 0-1.095.231c-.257.13-.526.424-.734.938h-.053V6H6v6.005h1.906V8.81c-.027-.327.077-.75.291-1.001c.215-.252.52-.312.753-.342h.073c.606 0 1.056.375 1.056 1.32v3.217h1.906L12 8.357Z"
        clip-rule="evenodd"
      />
    </svg>`,
    ariaLabel: "Connect with me on LinkedIn",
  },
];

export default socials;
