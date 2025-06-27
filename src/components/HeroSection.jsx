

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
        </section>
    )
}