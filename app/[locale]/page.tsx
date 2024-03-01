import Image from 'next/image';

import { useTranslation } from 'next-i18next';
import initTranslations from "../i18n";
const i18nNamespaces = ['home'];

export default async function Home({params: {locale}}: {params: {locale: string}}) {
	const {t} = await initTranslations(locale, ['home']);

	return (
		<div className={"cvContainer"}>
			<header>{/* Language switch and download PDF */}</header>
			<main>
				{/* Personal Info */}
				<section>
					<h1>{t('name')}</h1>
					<h2>{t('position')}</h2>
					{/* Image here */}
				</section>
				{/* Experience */}
				<section>
					<h3>{t('experience')}</h3>
					{/* List of experiences */}
					{/*<ul>*/}
					{/*    {experiences.map(exp => (*/}
					{/*        <li key={exp.id}>*/}
					{/*            <h4>{exp.position}</h4>*/}
					{/*            <p>{exp.company}, {exp.time}</p>*/}
					{/*            <p>{exp.description}</p>*/}
					{/*        </li>*/}
					{/*    ))}*/}
					{/*</ul>*/}
				</section>
				{/* Tech Stack */}
				<section>
					<h3>{t('techStack')}</h3>
					{/* Icons and names */}
				</section>
				{/* Education */}
				<section>
					<h3>{t('education')}</h3>
					{/* List of educations */}
				</section>
			</main>
			<aside>
				{/* Contact & Profile */}
				<section>{/* Contact Info */}</section>
				<section>{/* About Me */}</section>
				<section>{/* Languages */}</section>
			</aside>
			<footer>{/* Footer Text */}</footer>
		</div>
	);
}
