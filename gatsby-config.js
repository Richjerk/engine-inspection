module.exports = {
  siteMetadata: {
    title: `Township Business ChatBot`,
    description: `Empowering township small businesses with real-time support and assistance through an interactive chatbot.`,
    author: `Puseletso Mafisa`,
    siteUrl: `https://township-business-chatbot.vercel.app/`, // Update with your chatbot's actual URL
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `township-business-chatbot`,
        short_name: `chatbot`,
        start_url: `/`,
        background_color: `#ffffff`, // Customize as needed
        // theme_color: `#663399`, // Customize as needed
        display: `minimal-ui`,
        icon: `src/images/chatbot-icon.png`, // Update with your chatbot's icon
      },
    },
    // Optional: Add more plugins based on your project's requirements
    // For example, you can add plugins for APIs, authentication, styling, etc.
  ],
}
