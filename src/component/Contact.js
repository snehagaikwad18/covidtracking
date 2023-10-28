export default function Contact() {
  return (
    <>
      <div className='bg-white h-screen w-screen'>
        <nav className='h-[10%] bg-white flex justify-end mx-10 items-center'>
          <ul className="flex gap-5" >
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
        </nav>

        <div className="h-[20%] mx-20 my-5">
          <h1 className='text-5xl font-bold'>CONTACT US</h1>
          <p className='my-5 w-[70%] font-serif'>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
            WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT ,
            YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE,
            OR BY PHONE, EMAIL, OR SOCIAL MEDIA</p>
        </div>

        <div className='h-[64%] bg-white px-[5%] flex'>
          <div className='h-full w-[50%] bg-white '>
            <div className="flex justify-around my-5  ">

            <div className='h-10  w-[40%] text-white bg-black flex items-center justify-center gap-4 rounded '>
            <i class="fa-regular fa-envelope fa-beat-fade"></i>
              VIA SUPPORT CHAT</div>

              <div className='h-10  w-[40%] text-white bg-black flex items-center justify-center gap-4 rounded'>
              <i class="fa-solid fa-phone fa-beat-fade"></i>
              VIA CALL</div>
            </div>
            <h1 className='w-fulL text-center border-2  border-stone-300 '>
            <i class="fa-regular fa-envelope"></i>
              VIA EMAIL FORM</h1>
          </div>



          <div className='h-full w-[50%] bg-white items-center justify-center flex'>
<img src="contact.png" className='h-full  ' alt="" />
          </div>
        </div>
      </div>
    </>
  )
}