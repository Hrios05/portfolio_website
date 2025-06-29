import { ArrowDown } from "lucide-react"
import ufo from "@/assets/ufo.png"

export const HeroSection = () => {
    return (
        <section id='hero' className='relative min-h-screen flex flex-col items-center justify-center px-4'>
            <div className='container max-w-4xl mx-auto text-center'>
                <div className='space-y-6'>
                    <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
                        <span className='opacity-0 animate-fade-in'>
                            Hi, I'm</span>
                        <span className='text-primary opacity-0 animate-fade-in-delay-1'> Hector</span>

                        <span className='text-gradient ml-2 opacity-0 animate-fade-in-delay-2'> Rios</span>

                    </h1>
                    <div>
                        <img src={ufo} alt='UFO' className='inline-block h-40 w-40 md:h-50 md:w-50 ml-2 animate-float' />
                    </div>
                    <p1 className='text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3'>
                        I build sleek, functional digital experiences that put people first.
                        Driven by curiosity and crafted with code, my work bridges design and utility.
                        Whether it's a fresh idea or a complex challenge—I bring it to life.
                    </p1>
                    <div className='pt-5 opacity-0 animate-fade-in-delay-4'>
                        <a href='#projects' className='cosmic-button'>
                            View My Work
                        </a>
                    </div>

                </div>
            </div>
            <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce'>
                <span className='text-sm text-muted-foreground mb-2'> Scroll </span>

                <ArrowDown className='h-5 w-5 text-primary' />


            </div>
        </section>
    )
}