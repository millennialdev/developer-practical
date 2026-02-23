import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { CTA } from '@/lib/constants';
import Image from 'next/image';

export function CTABanner() {
	return (
		<section className='relative py-20 md:py-28'>
			<Image
				src={CTA.backgroundImage}
				alt=''
				fill
				className='object-cover'
				sizes='100vw'
			/>
			<div className='absolute inset-0 bg-brand-black/80' />
			<Container className='relative z-10 text-center'>
				<h2 className='text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white! leading-tight'>
					{CTA.heading}
				</h2>
				<p className='text-gray-300 text-lg mt-4 max-w-2xl mx-auto'>
					{CTA.subtext}
				</p>
				<div className='mt-8 flex flex-col sm:flex-row gap-4 justify-center'>
					<Button href={CTA.primaryHref} showArrow>
						{CTA.primaryLabel}
					</Button>
					<Button
						href={CTA.secondaryHref}
						variant='white'>
						{CTA.secondaryLabel}
					</Button>
				</div>
			</Container>
		</section>
	);
}
