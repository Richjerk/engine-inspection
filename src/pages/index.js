import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { ChatBot } from "../components/ChatBot" // Replace with your ChatBot component
import * as styles from "../styles/index.module.css" // Update path to your styles if needed

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className={styles.textCenter}>
      <h1>
        Welcome to <b>Township Business ChatBot</b>
      </h1>
      <p className={styles.intro}>
        Introducing an interactive chatbot to assist and empower township small businesses.
        <br />
        Chat with us for real-time support and information.
      </p>
      <ChatBot /> {/* Include your ChatBot component here */}
    </div>
    {/* Additional content can be added based on your requirements */}
  </Layout>
)

export default IndexPage
