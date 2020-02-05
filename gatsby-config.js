module.exports = {
  siteMetadata: {
    title: `Thaís MkTranças`,
    description: `Hello 👋🏻
    Me chamo Thaís Giovana. Nascida em Porto Velho- Rondônia;
    Formada em Estética e Imagem Pessoal;
    Atuando na área do embelezamento há aproximadamente 4 anos;
    Trabalho com todos os tipos de tranças, e maquiagem da clássica a artística..`,
    author: `Thais Giovanna`,
    siteUrl: `https://github.com/wangonya/flexible-gatsby`,
    social: {
      twitter: `thaismketrancas`,
      facebook: ``,
      github: `tatagiovanna12`,
      linkedin: `wangonya`,
      email: `geovana_18pvh@hotmail.com`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 970,
            },
          },
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `flexible-gatsby-starter`,
        short_name: `flexible-gatsby`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `./static/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
  ],
}
