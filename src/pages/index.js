
import Head from 'next/head'
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', margin: 0 }}>
      <Head>
        <title>Welcome to My Custom Next.js App</title>
        <meta name="description" content="A custom Next.js app built and deployed on Netlify." />
        <meta name="author" content="Your Name" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <header style={{
        backgroundColor: '#2d3b48',
        color: 'white',
        padding: '20px 0',
        fontSize: '24px',
        fontWeight: 'bold',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px'
      }}>
        <div>Welcome to My Custom Next.js App</div>
        <div>
          <Link href="/login" passHref legacyBehavior>
            <a style={{
              marginRight: '10px',
              background: '#fff',
              color: '#2d3b48',
              padding: '8px 16px',
              borderRadius: '4px',
              textDecoration: 'none',
              fontWeight: 'bold',
              boxShadow: '0 2px 4px rgba(0,0,0,0.08)'
            }}>Login</a>
          </Link>
          <Link href="/signup" passHref legacyBehavior>
            <a style={{
              background: '#fff',
              color: '#2d3b48',
              padding: '8px 16px',
              borderRadius: '4px',
              textDecoration: 'none',
              fontWeight: 'bold',
              boxShadow: '0 2px 4px rgba(0,0,0,0.08)'
            }}>Signup</a>
          </Link>
        </div>
      </header>

      <main style={{ padding: '20px', minHeight: '80vh' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#333' }}>Hello, World!</h1>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>
          This is a custom-built Next.js app, ready to be deployed on <strong>Netlify</strong>.
        </p>

        <section style={{
          marginTop: '40px',
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap',
        }}>
          <div style={{
            backgroundColor: '#f0f0f0',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            width: '300px',
            textAlign: 'center',
          }}>
            <h2 style={{ color: '#2d3b48' }}>Feature 1</h2>
            <p>This section highlights a key feature of your app. Add more content here.</p>
          </div>
          
          <div style={{
            backgroundColor: '#f0f0f0',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            width: '300px',
            textAlign: 'center',
          }}>
            <h2 style={{ color: '#2d3b48' }}>Feature 2</h2>
            <p>This section could describe another important part of your app.</p>
          </div>

          <div style={{
            backgroundColor: '#f0f0f0',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            width: '300px',
            textAlign: 'center',
          }}>
            <h2 style={{ color: '#2d3b48' }}>Feature 3</h2>
            <p>Here, you can talk about yet another feature that makes your app unique.</p>
          </div>
        </section>
      </main>

      <footer style={{
        backgroundColor: '#2d3b48',
        color: 'white',
        padding: '10px 0',
        fontSize: '1rem'
      }}>
        <p>© 2025 Your Company. All rights reserved.</p>
      </footer>
    </div>
  )
}
