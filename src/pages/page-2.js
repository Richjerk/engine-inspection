import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { ChatBot } from "../components/ChatBot" // Replace with your ChatBot component

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <div style={{ textAlign: "center" }}>
      <h1>Welcome to the Township Small Business ChatBot</h1>
      <p>Your trusted assistant for business queries and support.</p>
      <ChatBot /> {/* Include your ChatBot component here */}
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default SecondPage
