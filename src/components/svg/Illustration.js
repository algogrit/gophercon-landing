import React from 'react'

const SvgComponent = props => (
  <svg
    width={353}
    height={401}
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path
        d="M287.46 242.488s-223.38-.36-250.02 0c-26.64.36-35.82-39.29-37.35-114.995C-1.8 35.425 41.13-.09 145.98 1.169c91.08 1.079 183.6-19.69 199.53 140.17 7.83 77.683-10.71 101.239-58.05 101.15z"
        fill="#FFF"
        fillRule="nonzero"
        opacity={0.1}
      />
      <path
        d="M265.32 400.73s-177.3-.09-198.45 0c-21.15.09-34.56-11.598-29.7-30.75 11.34-44.235 32.58-34.075 115.83-33.715 72.27.27 159.39-10.79 158.4 37.402-.45 22.478-8.55 27.063-46.08 27.063z"
        fill="#3BA2BC"
        fillRule="nonzero"
      />
      <image
        x={8}
        y={269}
        width={345}
        height={64}
        xlinkHref="data:image/png;base64,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"
      />
      <g fill="#FFF" fillRule="nonzero">
        <path d="M87.39 375.376c.36 1.168.36 1.168.81 3.057.54-1.889.63-2.158.81-3.057l6.39-21.04c.54-1.977.9-3.236.99-4.765h10.26c-.63 1.349-.99 2.338-2.07 5.305l-9.27 26.344c-.72 2.158-1.17 3.596-1.44 4.765H82.53c-.18-1.169-.63-2.607-1.44-4.765l-9.36-26.344a84.487 84.487 0 0 0-2.07-5.305h10.26a25.58 25.58 0 0 0 1.08 4.766l6.39 21.039zM118.53 359.372c-.27 1.798-.36 3.506-.36 6.563v13.487c0 2.337.09 4.765.36 6.563h-9.18c.27-2.158.36-3.776.36-6.563v-13.487c0-2.877-.09-4.675-.36-6.563h9.18zm-.18-9.71v6.563h-8.91v-6.564h8.91zM130.05 375.106c.45 3.506 2.52 5.394 5.94 5.394 1.71 0 3.24-.539 4.41-1.618.63-.63.99-1.079 1.35-2.248l7.65 2.158c-.99 2.248-1.62 3.237-2.88 4.496-2.52 2.427-6.03 3.686-10.35 3.686-4.32 0-7.65-1.259-10.17-3.686-2.61-2.608-3.96-6.384-3.96-10.7 0-8.631 5.58-14.385 13.95-14.385 6.84 0 11.61 3.686 13.14 10.25.36 1.438.54 3.236.63 5.754v.899h-19.71zm11.34-6.024c-.63-2.787-2.52-4.316-5.49-4.316-3.15 0-4.95 1.439-5.76 4.316h11.25zM156.69 358.383c0-2.158-.09-3.957-.36-6.024h8.91c-.18 1.798-.36 3.866-.36 6.024v.899h1.62c1.89 0 2.97 0 4.32-.18v7.283a27.8 27.8 0 0 0-4.05-.27h-1.8v11.239c0 1.258.18 1.798.81 2.247.45.27 1.17.45 1.98.45 1.17 0 1.98-.18 3.06-.81l.63 6.654c-1.98.63-3.69.9-6.03.9-2.97 0-5.04-.45-6.48-1.53-1.62-1.258-2.25-2.787-2.25-5.754v-13.396h-1.62c-1.44 0-2.52.09-3.78.27v-7.283c1.26.18 2.34.27 3.87.27h1.62v-.99h-.09zM195.57 367.553a61.726 61.726 0 0 1 3.15 5.215c-.18-1.978-.27-4.046-.27-6.473v-9.98c0-2.878-.09-4.676-.36-6.654h9.36c-.27 1.978-.36 3.776-.36 6.654v23.196c0 2.698.09 4.676.36 6.474h-9.63c-.81-1.618-1.8-3.237-3.24-5.574l-8.1-12.228c-1.17-1.709-1.89-3.057-3.15-5.395.18 1.978.27 4.406.27 6.474v9.8c0 3.057.09 4.945.36 6.833h-9.36c.27-1.708.36-3.596.36-6.833v-23.017c0-2.518-.09-4.496-.36-6.474h9.54c.45 1.17 1.44 2.967 3.15 5.485l8.28 12.497zM230.04 367.733c0-2.068-1.26-3.057-4.14-3.057-2.79 0-4.32.9-4.95 3.057l-8.37-1.348c.9-2.608 1.8-3.957 3.69-5.305 2.34-1.619 5.58-2.518 9.81-2.518 3.24 0 6.39.63 8.1 1.529 2.79 1.528 4.05 3.956 4.05 7.912v11.778c0 2.697.09 4.226.27 6.204h-8.46v-1.978c-2.43 1.888-4.86 2.607-8.46 2.607-3.33 0-5.85-.809-7.56-2.427-1.62-1.439-2.43-3.507-2.43-5.934 0-2.788 1.08-4.945 3.24-6.384 2.25-1.618 5.13-2.517 9.09-2.877 1.71-.18 3.06-.18 6.21-.27v-.989h-.09zm0 6.654c-3.87.09-5.76.27-7.56.899-1.62.54-2.52 1.618-2.52 2.877 0 1.618 1.35 2.517 3.6 2.517 1.8 0 3.78-.63 4.95-1.618.99-.9 1.62-2.068 1.62-3.327v-1.348h-.09zM243.18 385.985c.27-1.978.36-3.866.36-6.563v-13.487c0-3.327-.09-4.855-.36-6.563h8.64v2.787c2.25-2.428 4.86-3.597 8.37-3.597 2.25 0 4.14.54 5.58 1.619.81.54 1.26 1.079 1.8 2.158 2.7-2.698 5.4-3.777 9.18-3.777 6.3 0 9.45 3.417 9.45 9.98v10.88c0 2.697.09 4.495.36 6.563h-9.09c.27-2.068.36-3.596.36-6.563v-8.992c0-3.236-.99-4.585-3.42-4.585-2.25 0-4.23 1.708-5.31 4.675v8.902c0 2.607.09 4.495.36 6.563h-9.09c.27-1.978.36-3.776.36-6.563v-8.992c0-1.798-.18-2.697-.72-3.416-.45-.72-1.35-1.079-2.43-1.079-2.34 0-4.41 1.708-5.58 4.675v8.812c0 2.787.09 4.495.36 6.563h-9.18z" />
      </g>
      <g transform="translate(59.4 19.78)">
        <path
          d="M54.27 152.937s-3.33 43.697-18 55.745c0 0 43.83 18.701 58.77 17.532l-40.77-73.277z"
          stroke="#414143"
          strokeWidth={3.6}
          fill="#E74761"
          fillRule="nonzero"
          strokeLinejoin="round"
        />
        <path
          d="M57.51 133.607s-26.1 13.037-24.21 22.837c2.97 15.195 31.86-6.024 31.86-6.024l-7.65-16.813z"
          stroke="#414143"
          strokeWidth={3.6}
          fill="#9BD6D8"
          fillRule="nonzero"
        />
        <path
          d="M53.28 133.427l-13.77 11.508s7.38 11.509 10.35 16.634c0 0 12.96-4.676 17.73-9.44l-14.31-18.702z"
          stroke="#414143"
          strokeWidth={3.6}
          fill="#E74761"
          fillRule="nonzero"
          strokeLinejoin="round"
        />
        <path
          d="M174.78 119.221s15.93-16.274 22.86-14.475c13.05 3.416-8.91 27.602-8.91 27.602l-13.95-13.127z"
          stroke="#414143"
          strokeWidth={3.6}
          fill="#9BD6D8"
          fillRule="nonzero"
        />
        <path
          d="M175.05 119.76l11.34-10.16s8.1 10.34 12.33 14.476c0 0-8.91 13.217-14.76 16.724l-8.91-21.04z"
          stroke="#414143"
          strokeWidth={3.6}
          fill="#E74761"
          fillRule="nonzero"
          strokeLinejoin="round"
        />
        <path
          d="M116.91 119.041s3.78 15.645 11.07 14.296c7.2-1.349 3.33-17.083 3.33-17.083"
          stroke="#414143"
          strokeWidth={4.628}
          fill="#FFF"
          fillRule="nonzero"
        />
        <ellipse
          stroke="#414143"
          strokeWidth={3.6}
          fill="#A56F3F"
          fillRule="nonzero"
          transform="rotate(-15.201 111.6 83.803)"
          cx={111.601}
          cy={83.803}
          rx={108.539}
          ry={23.286}
        />
        <g fillRule="nonzero">
          <path
            d="M62.37 42.797c-.81-1.169-1.8-2.337-2.97-3.236-6.48-5.305-16.11-4.406-21.51 2.067-5.31 6.474-4.41 16.094 2.07 21.489 1.17.99 2.43 1.708 3.78 2.248l18.63-22.568z"
            stroke="#414143"
            strokeWidth={3.6}
            fill="#9BD6D8"
          />
          <path
            d="M54.99 47.293c-.36-.54-.81-.99-1.35-1.439a6.829 6.829 0 0 0-9.54.9 6.813 6.813 0 0 0 .9 9.53c.54.45 1.08.809 1.71.989l8.28-9.98z"
            fill="#414143"
          />
        </g>
        <g fillRule="nonzero">
          <path
            d="M141.93 28.951c.09-1.438.27-2.877.81-4.316 2.7-8.002 11.34-12.227 19.35-9.53 8.01 2.697 12.24 11.329 9.54 19.33-.45 1.44-1.17 2.788-1.98 3.957l-27.72-9.44z"
            stroke="#414143"
            strokeWidth={3.6}
            fill="#9BD6D8"
          />
          <path
            d="M150.66 28.861c0-.63.18-1.259.36-1.888 1.17-3.506 5.04-5.395 8.55-4.226 3.51 1.17 5.4 5.035 4.23 8.542-.18.63-.54 1.259-.9 1.708l-12.24-4.136z"
            fill="#414143"
          />
        </g>
        <path
          d="M94.23 38.751c17.46-4.765 60.03-11.059 75.51 31.559 13.68 37.672 29.07 113.647-6.93 136.574-36 22.927-75.6 15.374-91.71.09-16.11-15.285-13.32-52.688-16.92-70.85-3.6-18.162-13.95-58.082 5.94-80.38 9.54-10.699 23.76-14.116 34.11-16.993z"
          stroke="#414143"
          strokeWidth={3.6}
          fill="#9BD6D8"
          fillRule="nonzero"
        />
        <g transform="translate(60.3 48.552)" fillRule="nonzero">
          <ellipse
            stroke="#414143"
            strokeWidth={3.6}
            fill="#FFF"
            cx={89.91}
            cy={26.973}
            rx={26.19}
            ry={26.164}
          />
          <ellipse
            stroke="#414143"
            strokeWidth={3.6}
            fill="#FFF"
            cx={26.73}
            cy={37.672}
            rx={26.19}
            ry={26.164}
          />
          <ellipse fill="#414143" cx={26.73} cy={39.74} rx={9.18} ry={9.171} />
          <ellipse fill="#FFF" cx={30.87} cy={38.841} rx={3.24} ry={3.237} />
          <ellipse fill="#414143" cx={89.91} cy={29.76} rx={9.18} ry={9.171} />
          <ellipse fill="#FFF" cx={94.05} cy={32.368} rx={3.24} ry={3.237} />
        </g>
        <path
          d="M105.57 61.319c46.8-12.678 88.2-16.903 104.13-11.419L92.25.54c-2.16-.9-4.59-.27-5.94 1.618L8.64 104.746c-.45.539-.54 1.168-.54 1.798 7.83-12.857 47.52-31.649 97.47-45.225z"
          stroke="#414143"
          strokeWidth={1.8}
          fill="#E4B480"
          fillRule="nonzero"
        />
        <g fillRule="nonzero">
          <path
            d="M116.64 111.848s3.15 13.037 11.07 11.419c7.11-1.439 4.77-13.397 4.77-13.397l-15.84 1.978zM128.07 122.997l-3.42-14.116"
            stroke="#414143"
            strokeWidth={3.6}
            fill="#FFF"
          />
          <path
            d="M116.55 114.905c.54.18 1.08 0 1.53-.27 1.26-.809 4.86-2.876 7.65-3.236 3.33-.45 5.76.18 6.75.45.45.18.99.27 1.44.18 2.07-.27 2.7-3.507 2.16-5.935-.81-3.596-4.05-6.383-11.07-5.574-10.44 1.169-12.15 6.563-11.43 10.61.18 1.438 1.89 3.506 2.97 3.775z"
            stroke="#414143"
            strokeWidth={3.6}
            fill="#E4B480"
          />
          <path
            d="M122.31 95.395c5.76-1.08 7.65-.27 8.64 2.607.81 2.338-1.8 6.114-10.53 5.575-7.02-.45-4.86-6.923 1.89-8.182z"
            fill="#414143"
          />
        </g>
        <path
          d="M86.58 1.798c-.09.09-.18.18-.27.36L8.64 104.746c-.45.539-.54 1.168-.54 1.798C12.6 99.17 27.54 89.82 48.87 80.65L86.58 1.798z"
          fill="#C1966E"
          fillRule="nonzero"
        />
        <path
          d="M58.41 173.797s2.97 49.54 0 52.507c0 0 31.77 12.498 74.7 7.733l-1.44-30.21-73.26-30.03z"
          stroke="#414143"
          strokeWidth={3.6}
          fill="#FFF"
          fillRule="nonzero"
          strokeLinejoin="round"
        />
        <path
          d="M181.71 171.639v52.507s-19.8 8.362-48.87 9.89l-1.17-30.21 50.04-32.187z"
          stroke="#414143"
          strokeWidth={3.6}
          fill="#FFF"
          fillRule="nonzero"
          strokeLinejoin="round"
        />
        <path
          d="M105.57 61.319c46.8-12.678 88.2-16.903 104.13-11.419L92.25.54c-2.16-.9-4.59-.27-5.94 1.618L8.64 104.746c-.45.539-.54 1.168-.54 1.798 7.83-12.857 47.52-31.649 97.47-45.225z"
          stroke="#414143"
          strokeWidth={3.6}
        />
        <path
          d="M185.49 147.453c-1.53-6.114-3.51-32.368-3.51-32.368-14.94 18.342-47.97 24.995-47.97 24.995l-3.24 11.868-8.82-8.181C84.51 150.87 53.01 129.2 53.01 129.2s2.43 28.861 4.77 35.155c4.59 13.127 24.03 61.229 44.73 61.948 24.75.9 69.75-4.046 99.54-22.118-.09-.09-13.41-38.122-16.56-56.733z"
          stroke="#414143"
          strokeWidth={3.6}
          fill="#E74761"
          fillRule="nonzero"
          strokeLinejoin="round"
        />
        <path
          stroke="#414143"
          strokeWidth={3.6}
          fill="#FDF169"
          fillRule="nonzero"
          strokeLinejoin="round"
          d="M131.76 164.266l6.66 9.89 12.87.45-8.55 8.901 3.24 11.239-11.88-4.316-10.89 6.384 1.17-11.599-9.99-7.282 12.6-2.788z"
        />
        <path
          d="M201.78 104.656l15.39-20.5"
          stroke="#414143"
          strokeWidth={3.6}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M228.6 66.713l-19.26 27.693s16.74 8.182 38.61 13.936l14.31-32.817s-18.36 0-33.66-8.812z"
          stroke="#414143"
          strokeWidth={3.6}
          fill="#19A1A2"
          fillRule="nonzero"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g fill="#FFF" fillRule="nonzero">
          <path d="M231.75 87.123c-.72-.27-.99-.36-1.44-.54l1.08-2.517c.54.27.81.45 1.8.9l1.17.449c.72.27 1.26.54 1.89.72-.27.539-.54.988-.9 1.887l-.72 1.619c-.45.989-.63 1.438-.81 2.157-.99.18-1.44.18-2.16.09-1.08-.09-2.16-.36-3.24-.809-1.8-.809-2.97-1.888-3.6-3.327-.63-1.528-.54-3.506.36-5.394 1.62-3.776 4.86-5.125 8.46-3.597 1.8.72 2.88 1.889 3.33 3.417.18.63.27 1.169.18 1.888l-3.15-.54c.09-.539 0-.898-.18-1.258-.27-.45-.63-.81-1.26-1.079-1.8-.81-3.42.09-4.41 2.518-.54 1.348-.72 2.517-.36 3.326.27.72.81 1.259 1.71 1.619.72.36 1.44.45 2.25.36l.72-1.62-.72-.269zM236.34 89.101c1.17-2.877 3.78-3.866 6.66-2.697 2.88 1.259 3.96 3.776 2.7 6.653-1.17 2.787-3.87 3.866-6.75 2.697-2.79-1.258-3.78-3.866-2.61-6.653zm2.7 1.079c-.63 1.618-.36 2.877.9 3.327 1.26.54 2.34-.09 2.97-1.709.72-1.618.36-2.877-.9-3.326-1.17-.45-2.25.18-2.97 1.708z" />
        </g>
      </g>
    </g>
  </svg>
)

export default SvgComponent