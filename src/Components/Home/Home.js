
import './Home.css'
const Home =() => {
    return(
        <>
        <section id='home'>
            <div className='home'>
                <div style={{marginLeft:'20px'}}>
            <h2 id='home-heading1'>Lokesh Bhardwaj </h2>
            <h3 className='my-3' >Frontend Developer with Backend Knowledge</h3>
            <p className='para-detail '> Hii I am A frontend developer with backend knowledge my focus on mainly designs and builds the parts of websites and apps that users interact with, like buttons, menus, and forms. However, I also understand and can work on the behind-the-scenes parts, like servers and databases, which store and manage data. This combination of skills allows me to create more complete and efficient web solutions.
</p>
                </div>
                <div>
                <img className='homeimg' src="/images/undraw_undraw_undraw_undraw_undraw_website_o7n3_bucy_30uo_-1-_d6br_0qfo.png" alt="" />  
                </div>
            </div>
        </section>

        <section  id='about' className='about-default-background'>
            <h2 className='text-center'>ABOUT US</h2>
            <hr />
            <div className='about1'>
                <div>
             <img  className='about-img' src="/images/WhatsApp Image 2024-05-29 at 3.51.29 PM.jpeg" alt="" />
                </div>
                <div>
                    <p className='about-detail'>Hii My Name is Lokesh Bhardwaj and i am a frontend developer who have backend knowledge also i have experience of 6 months in web dev.I created some projects like Blog app and Landing page for clients.you can check my projects in my project section.</p>
                    
                    

                   
                </div>
            </div>
        </section>
    
        </>
    )
}

export default Home