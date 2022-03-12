import Layout from '../components/Layout';

export default function Home() {
  return (
    <div className={`
      flex 
      h-screen 
      justify-center 
      items-center 
      bg-gradient-to-r to-blue-500 from-purple-500 
      text-white
    `}>
      <Layout title='Cadastro Simples'>
        <span>Content</span>
      </Layout>
    </div>
  )
}
