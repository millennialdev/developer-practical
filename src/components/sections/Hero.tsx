import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { COMPANY } from '@/lib/constants';
import Image from 'next/image';

export function Hero() {
	return (
		<section
			id='home'
			className='relative min-h-[80vh] sm:min-h-screen flex items-center pt-20'>
			<Image
				src='/images/hero-bg.jpg'
				alt='Construction site'
				fill
				className='object-cover'
				priority
				sizes='100vw'
			/>
			<div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30' />

			<Container className='relative z-10'>
				<div className='max-w-2xl py-20 lg:py-0'>
					<span className='text-brand-red font-semibold text-sm tracking-widest uppercase font-body'>
						Residential &amp; Commercial Construction
					</span>
					<h1 className='text-3xl sm:text-4xl lg:text-[56px] font-heading font-extrabold text-white! leading-[1.1] mt-4'>
						{COMPANY.tagline}
					</h1>
					<p className='text-white/80 text-base sm:text-lg mt-6 max-w-xl leading-relaxed font-body'>
						{COMPANY.heroSubtext}
					</p>
					<div className='mt-8 flex flex-col sm:flex-row gap-4'>
						<Button
							href='#services'
							showArrow
							className='w-full sm:w-auto'>
							Our Services
						</Button>
						<Button
							href='#contact'
							variant='white'
							className='w-full sm:w-auto'>
							Get Free Quote
						</Button>
					</div>
				</div>
			</Container>
		</section>
	);
}
