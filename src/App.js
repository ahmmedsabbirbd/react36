import React from 'react';    
import ClassComponent from './component/ClassComponent';  

function App(){
    return <div> 
            <section className='overflow-hidden py-[40px] md:py-[60px]'>
                <div className='container space-y-[20px]'>
                    <div className='flex items-center flex-wrap -m-4'>
                        <ClassComponent cardTtitle="Where does it come from?" cardSubTitle="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. " /> 
                    
                        <ClassComponent cardTtitle="What is Lorem Ipsum?" cardSubTitle="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. " />
                        
                        <ClassComponent cardTtitle="Why do we use it?" cardSubTitle="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. " />
                        
                        <ClassComponent cardTtitle="Where can I get some?" cardSubTitle="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. " />

                    </div>
                </div>
            </section>
        </div>
}

export default App;