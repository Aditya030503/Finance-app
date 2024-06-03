import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io"
import { IoMdArrowDroprightCircle } from "react-icons/io";
import landingIcon from '../assets/Group 35924.png';
import iPhone1 from '../assets/iPhone-13-Pro-Front (2).png';
import iPhone2 from '../assets/iPhone-13-Pro-Front (1).png';
import star from '../assets/Star 8.png';
import starDark from '../assets/Star 6.png';
import iPhone4 from '../assets/iPhone-13-Pro-Front (4).png';
import feature1 from '../assets/star-05.png';
import feature2 from '../assets/cube-02.png';
import feature3 from '../assets/cube-04.png';
import iPhone5 from '../assets/iPhone-13-Pro-Front (3).png';
import hold from '../assets/On Hold.png';
import notifiIcon from '../assets/Group 35899.png';
import card from '../assets/Group.png';
import staricon from '../assets/Group 358899.png';
import testimonial1 from '../assets/3d0aa4d14cda7bc42808b89656209b4c.jpeg';
import testimonial2 from '../assets/1943bbd9353c15f99458a2725abe36de.jpeg'
import testimonial3 from '../assets/b5c3b91404749b990f6c0be7e4ce903a.jpeg'
import testimonial4 from '../assets/b9c609271c97046f1e3cf7a867e58961.jpeg'
import testimonial5 from '../assets/5213504a0a94109dced384ca843b2a9d.jpeg'
import cardImg1 from '../assets/1.png';
import cardImg2 from '../assets/2.png';
import cardImg3 from '../assets/3.png';
import appleIcon from '../assets/Vector.png'
import Logo from '../assets/logo (2).png'
import Logo1 from '../assets/Frame (1).png'
import Logo2 from '../assets/call frame.png'
import dot from '../assets/“.png'


function Home() {
  return (
    <div>

    {/* landing section1 page */}
      <div className='w-10/12 m-auto flex relative px-12 '>
        <img src={star} alt="" className=' absolute -top-16 -right-24 rotate-[25deg] w-16' />
        <img src={star} alt="" className=' absolute top-5 -left-16' />
        <img src={star} alt="" className=' absolute top-[53%] left-36' />
        <div className=' absolute top-[4%] left-[200px] -z-20'>
           <div className=' relative'>
                  <div className='w-[250px] h-[150px] bg-richorange-20 absolute rounded-[50%] blur-xl z-10'></div>
                     <div className='w-[250px] h-[150px] bg-yellow-100 absolute top-16  rounded-[50%]  blur-xl'></div>
                   </div>
           </div>
        <div className='w-[45%] mt-24 px-4'>
            <h1 className=' text-5xl  font-black'>
                Make The Best Financial Decisions
            </h1>
            <p className='text-sm font-semibold mt-7 text-richblack-300'>
                Cum Et Convallis Risus Placerat Aliquam,Nunc,Scelerisque Aliquet Faucibus Tinciddunt Eu Adipisoing Socliis Arou Lorem Porttior.
            </p>
            <div className='flex gap-2 mt-7'>
            <button className=' text-base flex items-center justify-center px-4 py-2 rounded-md font-medium text-white bg-richblack-800 '><span>Get Started</span><IoIosArrowRoundForward /></button>
            <button className=' text-base text-richblack-800 flex items-center justify-center px-4 py-2'><IoMdArrowDroprightCircle /><span>Watch Video</span></button>
            </div>
            <div className='my-10'>
                <img src={landingIcon} alt="" width={500} />
            </div>
            
        </div>
        <div className='w-1/2 relative '>
            <img src={iPhone1} alt="" className=' absolute z-40 -top-[60px] -left-[90px]'/>
            <img src={iPhone2} alt="" className=' absolute top-4 -right-10 z-30'/>
            <img src={iPhone1} alt="" className=' absolute top-16 -right-[70px] z-20' />
            <div className='w-[550px] h-[400px] border rounded-[50%] rotate-45 absolute top-20 -right-24 z-0'></div>
            <div className='w-[550px] h-[400px] border rounded-[50%] rotate-45 absolute top-28 -right-16 z-0'></div>
            <div className='w-[550px] h-[400px] border rounded-[50%] rotate-45 absolute top-36 -right-8 z-0'></div>
            <div className=' absolute top-[65%] left-[130px] '>
           <div className=' relative'>
                  <div className='w-[300px] h-[150px] bg-richorange-20 absolute rounded-[50%] blur-xl z-10'></div>
                     {/* <div className='w-[250px] h-[150px] bg-yellow-100 absolute top-16  rounded-[50%]  blur-xl'></div> */}
                   </div>
           </div>
        </div>
      </div>

      
       {/* landing section2 page */}
      
      
      <div className='w-10/12 gap-4 m-auto flex relative px-12  mt-16'>
      <div className=' absolute top-[20%] right-[80px] -z-20'>
           <div className=' relative'>
                  <div className='w-[250px] h-[150px] bg-richorange-20 absolute rounded-[50%] blur-xl z-10'></div>
                     <div className='w-[250px] h-[150px] bg-yellow-100 absolute top-16  rounded-[50%]  blur-xl'></div>
                   </div>
           </div>
           <img src={star} alt="" className=' absolute top-24 -left-16  ' />

        <div className='w-1/2  flex relative justify-end' >
         <img src={iPhone4} alt=""  className=' z-10'/>
         <div className='w-[550px] h-[400px] border rounded-[50%] rotate-45 absolute top-20 left-7 z-0'></div>
            <div className='w-[550px] h-[400px] border rounded-[50%] rotate-45 absolute top-28 right-2 z-0'></div>
            <div className='w-[550px] h-[400px] border rounded-[50%] rotate-45 absolute top-36 right-8 z-0'></div>
            <div className=' absolute top-[10%] left-[80px] -z-20'>
           <div className=' relative'>
                  <div className='w-[350px] h-[200px]  bg-yellow-100 absolute rounded-[50%] blur-xl '></div>
                     <div className='w-[350px] h-[200px] bg-richorange-20 absolute top-16  rounded-[50%] z-10  blur-xl'></div>
                   </div>
           </div>
        </div>



        <div className='w-[50%] leading-3 mt-20'>
           <p className=' font-semibold text-lg text-richorange-20'>FRATURES</p>
           <h1 className='text-5xl mt-1  font-black'>Uifry Premium</h1>

           <div className='mt-10'>
           <div className='flex gap-1'>
            <img src={feature1} alt="" />
            <span className=' text-lg font-bold '>Budgeting Intervale</span>
           </div>
           <p className='text-lg  font-semibold mt-3 text-richblack-300'>
                Cum Et Convallis Risus Placerat Aliquam,Nunc,Scelerisque Aliquet Faucibus Tinciddunt Eu Adipisoing Socliis Arou Lorem Porttior.
           </p>
           </div>

           <div className='mt-6'>
           <div className='flex gap-1'>
            <img src={feature2} alt="" />
            <span className=' text-lg font-bold '>Budgeting Intervale</span>
           </div>
           <p className='text-lg font-semibold mt-3 text-richblack-300'>
                Cum Et Convallis Risus Placerat Aliquam,Nunc,Scelerisque Aliquet Faucibus Tinciddunt Eu Adipisoing Socliis Arou Lorem Porttior.
           </p>
           </div>


          <div className='mt-6'>
           <div className='flex gap-1'>
            <img src={feature3} alt="" />
            <span className=' text-lg font-bold '>Budgeting Intervale</span>
           </div>
           <p className='text-lg font-semibold mt-3 text-richblack-300'>
                Cum Et Convallis Risus Placerat Aliquam,Nunc,Scelerisque Aliquet Faucibus Tinciddunt Eu Adipisoing Socliis Arou Lorem Porttior.
           </p>
           </div>



        </div>

      </div>


      {/* landing section3 page */}

<div className='w-10/12 gap-4 m-auto flex relative items-center px-12  mt-16'>
        <img src={star} alt="" className=' absolute top-0 rotate-[19deg] -right-32' />
       <div className='w-[46%] leading-3 '>
           <p className=' font-semibold text-lg text-richorange-20'>ADVANTNAGES</p>
           <h1 className='text-5xl mt-1  font-black'>Why Choose Uifry?</h1>

           <div className='mt-10'>
           <div className='flex gap-1 items-center'>
            <img src={notifiIcon} alt="" />
            <span className=' text-3xl font-bold '>Clever Notifications</span>
           </div>
           <p className='text-lg capitalize  font-semibold mt-3 text-richblack-300'>
           Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.           </p>
           </div>


        </div>

        <div className='w-1/2  flex relative justify-end' >
         <img src={iPhone5} alt=""  className=' z-10'/>
         <img src={hold} alt=""  className=' absolute top-[35%] right-10 z-10'/>
         <div className='w-[550px] h-[400px] border rounded-[50%] rotate-45 absolute top-20 left-7 z-0'></div>
            <div className='w-[550px] h-[400px] border rounded-[50%] rotate-45 absolute top-28 right-2 z-0'></div>
            <div className='w-[550px] h-[400px] border rounded-[50%] rotate-45 absolute top-36 right-8 z-0'></div>
            <div className=' absolute top-[39%] left-[40px] -z-20'>
           <div className=' relative'>
                  <div className='w-[250px] h-[150px] bg-richorange-20 absolute rounded-[50%] blur-xl z-10'></div>
                     <div className='w-[250px] h-[150px] bg-yellow-100 absolute top-16  rounded-[50%]  blur-xl'></div>
                   </div>
           </div>
        </div>

      </div>

          {/* landing section4 page */}
      
<div className='w-10/12 gap-4 m-auto flex relative items-center px-12  mt-16'>
    <img src={star} alt="" className=' absolute -top-20 left-[45%]' />

       <div className='w-1/2  flex relative justify-end' >
          <img src={iPhone4} alt=""  className=' z-10'/>
          <img src={card} alt=""  className=' absolute top-[24%] right-28 z-10'/>
          <div className='w-[550px] h-[400px] border rounded-[50%] rotate-45 absolute top-20 left-7 z-0'></div>
             <div className='w-[550px] h-[400px] border rounded-[50%] rotate-45 absolute top-28 right-2 z-0'></div>
             <div className='w-[550px] h-[400px] border rounded-[50%] rotate-45 absolute top-36 right-8 z-0'></div>
             <div className=' absolute top-[34%] rotate-2 left-[155px] -z-20'>
           <div className=' relative'>
                  <div className='w-[300px] h-[200px] bg-yellow-100 absolute rounded-[50%] blur-xl '></div>
                     <div className='w-[300px] h-[200px]  bg-richorange-20 absolute top-16  rounded-[50%] z-10 blur-xl'></div>
                   </div>
           </div>
         </div>
        
        <div className='w-[47%] leading-3 '>
           
            <div className=''>
            <div className='flex gap-1 items-center'>
             <img src={staricon} alt="" />
             <span className=' text-3xl font-bold '>Fully customizable</span>
            </div>
            <p className='text-lg capitalize  font-semibold mt-3 text-richblack-300'>
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.           </p>
            </div>
 
 
         </div>
 
        
 
       </div>


           {/* landing section5 testimonails page */}

       <div className='w-11/12 flex flex-col relative m-auto'>
        <img src={star} alt="" className=' absolute -top-36 rotate-[22deg] right-36' />
        <div className='text-center'>
        <p className=' font-semibold text-lg  text-richblack-800'>TESTIMONAILS</p> 
           <h1 className='text-6xl mt-1 capitalize font-black'>What our users <br /> say about us?</h1>
        </div>
        <div className=' w-full gap-4 m-auto flex relative items-center px-12  mt-12'>
        <div className='w-1/2 h-[500px] flex relative justify-end' >
             {/* center img */}
          <div className=' absolute  w-56 h-56 rounded-full top-[41%] left-56 border-4  border-richblack-900 overflow-hidden'>
          <img src={testimonial3} alt="" className=' w-60 h-56' />
          </div>
                   {/* left img */}
          <div className=' absolute w-24 h-24 rounded-full flex items-center top-[20%] left-20 z-10 border-4  border-richblack-900 overflow-hidden'>
          <img src={testimonial2} alt="" className=' w-56 h-[90px]' />
          </div>
              {/* right img */}
        
          <div className=' absolute w-20 h-20 flex items-center rounded-full bottom-[2.2%] right-[10.7%] z-10 border-4  border-richblack-900 overflow-hidden'>
          <img src={testimonial5} alt="" className=' w-[260px] h-[110px]' />
          </div>
                 {/* bottom img */}
          <div className=' absolute w-24 h-24 rounded-full flex items-center bottom-[1%] right-[70%] z-10 border-4  border-richblack-900 overflow-hidden'>
          <img src={testimonial4} alt="" className=' w-64 h-[130px]' />
          </div>
          {/* top img */}
          <img src={testimonial1} alt="" className=' absolute w-28 h-28 rounded-full top-[16%] right-[13%] z-10 border-4  border-richblack-900 ' />
          
         <div className=' bg-richorange-20 w-16 h-16 rounded-full flex items-center justify-center absolute top-[56%] left-[66%]'>
            <img src={dot} alt=""  className=''/>
         </div>
          <div className='w-[550px] h-[400px] border rounded-[50%] rotate-45 absolute top-20 left-20 z-0'></div>
             <div className='w-[550px] h-[400px] border rounded-[50%] rotate-45 absolute top-28 right-2 z-0'></div>
             <div className='w-[550px] h-[400px] border rounded-[50%] rotate-45 absolute top-36 right-8 z-0'></div>
         </div>

         <div className=' absolute top-[34%] left-[200px] -z-20'>
           <div className=' relative'>
                  <div className='w-[250px] h-[150px] bg-richorange-20 absolute rounded-[50%] blur-xl z-10'></div>
                     <div className='w-[250px] h-[150px] bg-yellow-100 absolute top-16  rounded-[50%]  blur-xl'></div>
                   </div>
           </div>
        
        <div className='w-[35%] leading-3 ml-16'>
           
            <div className=''>
            <div className='flex gap-1 items-center'>
             
             <span className=' text-3xl font-bold capitalize'>The best financial accounting app ever!</span>
            </div>
          
          <blockquote>
          <p className='text-lg capitalize  font-semibold mt-3 text-richblack-300'>
            "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam."        
           </p>
          </blockquote>

            </div>

            <div className='mt-8 gap-3 flex items-center'>
                <div className=''><img src={testimonial5} alt="" className='w-12 h-12 rounded-full'/></div>
                <div className=''><img src={testimonial2} alt="" className='w-10 h-10 opacity-50 rounded-full'/></div>
                <div className=''><img src={testimonial4} alt="" className='w-10 h-10 opacity-50 rounded-full'/></div>
                <div className=''><img src={testimonial3} alt="" className='w-10 h-10 opacity-50 rounded-full'/></div>
                <div className=''><img src={testimonial1} alt="" className='w-10 h-10 opacity-50 rounded-full'/></div>
            </div>

            <div className='mt-7'>
                <p className=' font-bold text-lg'>
                    Nick Jonas
                </p>
            </div>
 
 
         </div>
        </div>
       </div>
          

          {/* section6 question page */}

       <div className=' w-11/12 m-auto mt-64 px-16 relative'>
        <img src={star} alt=""  className=' absolute left-[55%] rotate-[25deg] top-24' />
       <div className=''>
       <p className=' font-semibold text-lg text-richorange-20'>FAQ</p>
        <h1 className='text-6xl mt-1  font-black capitalize'>frequently asked <br /> question</h1>
       </div>

        <div className='flex gap-8 mt-8'>
            <div className='w-1/2 p-4 rounded-md bg-richorange-20 text-white'>
            <div className='flex gap-1 items-center'>
             <span className=' text-4xl font-bold capitalize'>The best financial accounting app ever!</span>
            </div>
            <p className='text-lg capitalize  font-semibold mt-3'>
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio Duis tristique mauris .
            </p>
            </div>
            <div className='w-1/2 p-4 '>
            <div className='flex gap-1 items-center'>
             <span className=' text-4xl font-bold capitalize'>The best financial accounting app ever!</span>
            </div>
            <p className='text-lg capitalize  font-semibold mt-3 text-richblack-300'>
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio Duis tristique mauris .
            </p>
            </div>
        </div>

        <div className='flex gap-8 flex-row-reverse mt-8'>
            <div className='w-1/2 p-4 rounded-md bg-richorange-20 text-white'>
            <div className='flex gap-1 items-center'>
             <span className=' text-4xl font-bold capitalize'>The best financial accounting app ever!</span>
            </div>
            <p className='text-lg capitalize  font-semibold mt-3'>
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio Duis tristique mauris .
            </p>
            </div>
            <div className='w-1/2 p-4 '>
            <div className='flex gap-1 items-center'>
             <span className=' text-4xl font-bold capitalize'>The best financial accounting app ever!</span>
            </div>
            <p className='text-lg capitalize  font-semibold mt-3 text-richblack-300'>
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio Duis tristique mauris .
            </p>
            </div>
        </div>

        <div className='flex gap-8 mt-8'>
            <div className='w-1/2 p-4 rounded-md bg-richorange-20 text-white'>
            <div className='flex gap-1 items-center'>
             <span className=' text-4xl font-bold capitalize'>The best financial accounting app ever!</span>
            </div>
            <p className='text-lg capitalize  font-semibold mt-3'>
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio Duis tristique mauris .
            </p>
            </div>
            <div className='w-1/2 p-4 '>
            <div className='flex gap-1 items-center'>
             <span className=' text-4xl font-bold capitalize'>The best financial accounting app ever!</span>
            </div>
            <p className='text-lg capitalize  font-semibold mt-3 text-richblack-300'>
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio Duis tristique mauris .
            </p>
            </div>
        </div>
       </div>

          {/* section7 dark card */}
       <div className='w-full overflow-hidden '>
       <div className='w-11/12 px-16 m-auto relative  '>
            <div className='w-[550px] h-[400px] border border-white rounded-[50%] rotate-45 absolute top-4 -right-[180px] z-0'></div>
            <div className='w-[550px] h-[400px] border border-white rounded-[50%] rotate-45 absolute top-2 -right-56 z-0'></div>
            <div className='w-[550px] h-[400px] border border-white rounded-[50%] rotate-45 absolute -top-2 -right-64 z-0'></div>


            <div className='w-[550px] h-[400px] border border-white rounded-[50%] rotate-45 absolute -bottom-28 -left-[185px] z-0'></div>
            <div className='w-[550px] h-[400px] border border-white rounded-[50%] rotate-45 absolute -bottom-36 -left-[230px] z-0'></div>
            <div className='w-[550px] h-[400px] border border-white rounded-[50%] rotate-45 absolute -bottom-48 -left-[270px] z-0'></div>
           <div className=' absolute top-14 left-[57%] rotate-[30deg] bg-black z-50'>
           <img src={starDark} alt="" width={80} />
           </div>
           <div className=' absolute top-[70%] left-[45%]  bg-black z-50'>
           <img src={starDark} alt="" />
           </div>
           <div className=' absolute top-[30%] -left-8   z-50'>
           <img src={star} alt="" />
           </div>
           <div className=' absolute -top-[20%] -left-8 -z-20'>
           <div className=' relative'>
                  <div className='w-[250px] h-[150px] bg-richorange-20 absolute rounded-[50%] blur-xl z-10'></div>
                     <div className='w-[250px] h-[150px] bg-yellow-100 absolute top-16  rounded-[50%]  blur-xl'></div>
                   </div>
           </div>

     <div className='w-full h-[500px] rounded-xl bg-richblack-900 mt-56 flex z-10  '>
         
         <div className=' flex flex-col w-[50%] m-auto pl-20 '>
         <div className='flex gap-1 items-center'>
              <span className=' text-5xl font-extrabold text-white capitalize'>Ready to get started?</span>
             </div>
             <p className='text-lg capitalize  font-semibold mt-3 text-richblack-300'>
           risus habitant leo egosstas mauris diam egot marbi tompus vuiputate 
            </p>
           <div>
           <button className=' text-base flex items-center justify-center gap-2 px-6 py-3 mt-5 rounded-md font-medium bg-white text-richblack-800 '><span className='z-10'>Download App</span><img src={appleIcon} alt="" /></button>

           </div>
         </div>
 
         <div className='m-auto h-full relative '>
             <img src={cardImg1} alt="" className='relative -left-[43%] -bottom-[23%] z-20' />
             <img src={cardImg2} alt="" className='relative left-[25%] bottom-[65%] z-10 h-[440px]' />
             <img src={cardImg3} alt="" className='relative left-[76.8%] bottom-[160%] z-0 h-[440px] ' />



         </div>
        </div>
     </div>
       </div>
   
         {/* section8 footer page */}
   <div className='w-10/12  m-auto mt-48'>
   <div className='gap-4 flex relative justify-between '>
        <div className='' >
        <div className='flex relative'>
        <img src={Logo} alt="" loading='lazy'/>
        <span className=' text-4xl font-bold'>uifry</span>
        <span className=' absolute top-[16px]  right-[45px] font-bold text-[4px]'>TM</span>
        </div>
        <div className='flex gap-3 mt-5'>
            <img src={Logo1} alt="" />
            <span className='text-lg '>Help@Frybix.com</span>
        </div>
        <div className='flex gap-3 mt-5'>
            <img src={Logo2} alt="" />
            <span className='text-lg'>+123445667889</span>
        </div>
        </div>
        <div className='flex flex-col gap-6'>
            <h1 className=' font-normal text-4xl'>
                Links
            </h1>
            <p>Home</p>
            <p>AboutUs</p>
            <p>Bookings</p>
            <p>Blog</p>
        </div>
        <div className='flex flex-col gap-6'>
            <h1 className=' font-normal text-4xl'>
                Legal
            </h1>
            <p>Team Of Use</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
            
        </div>
        <div className='flex flex-col gap-6'>
            <h1 className=' font-normal text-4xl'>
               Product
            </h1>
            <p>Take Tour</p>
            <p>Live Chat</p>
            <p>Reveiws</p>
          
        </div>
        <div className='flex flex-col gap-6'>
            <h1 className=' font-normal text-4xl'>
                Newsletter
            </h1>
            <p>stayUpToDate</p>
            <div className='flex'>
                <input type="text" name="" id="" placeholder='Your email' className=' text-center p-2'/>
                <button className='bg-richblack-900 px-5 py-2 text-white'>Subscribe</button>
            </div>
        </div>
    </div>
    <div className=' mt-28 text-center'>
        <hr />
        <p className='mt-5 mb-10'>Copyright2022 Uifry.com All Rights Reserved</p>
    </div>
   </div>
  

      
    </div>
  )
}

export default Home
