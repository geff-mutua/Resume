import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image'
function MainContent() {
    return (
        <div className="text-white mt-6">
            <div >
                <h3 className="text-lg font-bold">About Me </h3>
                <div className="h-1 w-12 bg-yellow-200 mt-2"></div>
                <div className="mt-5 p-5">

                    <p className="text-xs">I am an Information Technology graduate capable of working independently and diligently in a demanding,
                     dynamic and fast-paced environment. Am well understanding of various programming languages, Networking Skills, Database Administrations,
                     Software and hardware skills in IT fields. Am flexible to adapt to any changes in the ICT department, promoting teamwork with
                      the goal of bringing more success to the organization. </p>
                    <p className="mt-3 text-xs">Looking forward to advancing my career in ICT through continuous training and the use of modern 
                    and innovative technology that will enable me to contribute positively and profitably to the working environment.
                    My goal is to obtain a full-time position in the field of information technology with an emphasis on technology. 
                    Special interests include Software Design, Software Development, Consulting, Systems Analysis and integrations, 
                    and General Information Technology Fields.</p>
                </div>
                <h3 className="text-lg font-bold">Areas of Expertise </h3>
                <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mx-auto'>

                    <div className='bg-geff_color relative flex flex-col m-5 z-30 p-10 rounded-3xl'>
                        <div className='mb-2'>
                            <Image src='https://links.geocadict.com/icon-design2.png'
                                width={30}
                                height={30}
                                objectFit='contain'
                                className='left-2'
                            />
                        </div>
                        <h3 className="font-bold mb-2 text-lg">Web Designer</h3>
                        <p className="text-xs">The most modern and high-quality design made at a professional level. </p>
                    </div>
                    <div className='bg-geff_color relative flex flex-col m-5 z-30 p-10 rounded-3xl'>
                        <div className='mb-2'>
                            <Image src='https://links.geocadict.com/icon-dev2.png'
                                width={30}
                                height={30}
                                objectFit='contain'
                                className='left-2'
                            />
                        </div>
                        <h3 className="font-bold mb-2 text-lg">Web Development</h3>
                        <p className="text-xs">High-quality development of sites at the professional level.. </p>
                    </div>
                    <div className='bg-geff_color relative flex flex-col m-5 z-30 p-10 rounded-3xl'>
                        <div className='mb-2'>
                            <Image src='https://links.geocadict.com/icon-app2.png'
                                width={30}
                                height={30}
                                objectFit='contain'
                                className='left-2'
                            />
                        </div>
                        <h3 className="font-bold mb-2 text-lg">Mobile Apps</h3>
                        <p className="text-xs">The most modern and high-quality design made at a professional level. </p>
                    </div>
                </div>
                <h3 className="text-lg font-bold">Clients Have worked with </h3>
                <div className="relative lg:inline-block md:inline-block">
                <Carousel
                    autoPlay
                    infiniteLoop
                    showStatus={false}
                    
                    showThumbs={false}
                    interval={2000}>
                        
                        <div className='mt-3 p-2 '>
                        <Image src='https://links.geocadict.com/qxp.png'
                                width={150}
                                height={80}
                                objectFit='contain'
                                className='mr-2'
                            />
                           
                        </div>
                       
                       
                        
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default MainContent;