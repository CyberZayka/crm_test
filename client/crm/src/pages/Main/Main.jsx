import React,{useState,useEffect} from 'react'

function Main() {
  const [desc, setDesc] = useState("")

  useEffect(() => {
    fetch("/api/main")
    .then(res => res.json())
    .then(data => setDesc(data))
  }, [])

  return (
    <>
    <h1>This is a test project for mini-CRM</h1>
    <p>Customer relationship management (CRM) is a technology for managing all your company’s relationships and interactions with customers and potential customers. The goal is simple: Improve business relationships to grow your business. A CRM system helps companies stay connected to customers, streamline processes, and improve profitability.</p>
    <p>In our app you have ability create,edit or delete some employees or companies.</p>
    <p>Below random text generated via <span style={{fontWeight: "600"}}>Faker.js</span></p>
    {desc}
    </>
  );
}

export default Main;