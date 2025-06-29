import { Briefcase, Code, User } from "lucide-react";
import CV from "@/assets/CV.pdf";

export const AboutSection = () => {
    return (
        <section id="about" className='py-24 px-4 relative'>
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl mdtext-4xl font-bold mb-12 text-center">
                    About <span className='text-primary'> Me</span>
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>

                    <div className='space-y-6'>
                        <h3 className='text-2xl font-semibold'>Computer Science Student • Researcher • Builder</h3>
                        <p className='text-muted-foreground'>I’m an undergrad passionate about solving real-world problems with tech—from building safer walking routes with React to exploring image recognition in research. I love working at the intersection of innovation, impact, and continuous learning.</p>
                        <p className='text-muted-foreground'>Beyond code, I care about people. I bring creativity, curiosity, and a strong sense of ownership to every project—whether it’s shipping features, analyzing data, or designing experiences that make everyday life a little better.</p>
                        <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
                            <a href='#contact' className="cosmic-button"> Get In Touch </a>
                            <a href={CV} className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300" download> Download CV </a>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 gap-6'>
                        <div className='gradient-border p-6 card-hover'>
                            <div className='flex items-center gap-4'>
                                <div className='p-3 rounded-full bg-primary/20'>
                                    <Code className='h-6 w-6 text-primary' />

                                </div>
                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg'> Software Development</h4>
                                    <p className='text-muted-foreground'>Building responsive web applications using React, Next.js, and Tailwind CSS.</p>
                                </div>
                            </div>
                        </div>
                        <div className='gradient-border p-6 card-hover'>

                            <div className='flex items-center gap-4'>
                                <div className='p-3 rounded-full bg-primary/20'>
                                    <User className='h-6 w-6 text-primary' />
                                </div>
                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg'> Collaborative Engineering </h4>
                                    <p className='text-muted-foreground'>Working closely with teams to bring ideas to life through clean, scalable code and thoughtful UI/UX.</p>
                                </div>
                            </div>
                        </div>
                        <div className='gradient-border p-6 card-hover'>

                            <div className='flex items-center gap-4'>
                                <div className='p-3 rounded-full bg-primary/20'>
                                    <Briefcase className='h-6 w-6 text-primary' />
                                </div>
                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg'> Real-World Projects </h4>
                                    <p className='text-muted-foreground'>Delivering production-ready apps—focused on performance and usability.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>




    )

};