// @ts-expect-error Facebook /shrug
import Link from '@docusaurus/Link';
import styled from '@emotion/styled';
import { BeakerIcon, ChatIcon, CodeIcon, InformationCircleIcon } from '@heroicons/react/outline';
// @ts-expect-error Facebook /shrug
import SearchBar from '@theme-original/SearchBar';
// @ts-expect-error Facebook /shrug
import Layout from '@theme/Layout';
import React, { SVGProps } from 'react';
import { ArrowIcon, ColouredDiscordLogo, GithubLogo } from '../components/icons';
import './styles.module.css';

export const ActionReferences: Actions[] = [
	{
		title: 'What is Kōyō Finance',
		href: '#',
		icon: InformationCircleIcon,
		to: './protocol/introduction',
		text: 'Learn about the core concepts of the Kōyō Finance.'
	},
	{
		title: 'Smart contract deployments',
		href: '#',
		icon: BeakerIcon,
		to: './protocol/reference/deployments',
		text: 'Find a list of all deployed Kōyō Finance contract addresses and references to their code.'
	}
];

export const GithubReferences: Actions[] = [
	{
		title: 'sdk',
		href: 'https://github.com/koyo-finance/sdk',
		icon: CodeIcon,
		text: ''
	}
];

export const Guides: Actions[] = [];

const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
`;

const Row = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 16px;
	justify-content: center;
	margin: 0 auto;
	padding: 1rem 0;
	max-width: 960px;

	@media (max-width: 960px) {
		grid-template-columns: 1fr;
		padding: 1rem;
		max-width: 100%;
		margin: 0 1rem;
	}
	@media (max-width: 640px) {
		grid-template-columns: 1fr;
	}
`;

const TwoRow = styled(Row)`
	grid-template-columns: 1fr 1fr;
	grid-gap: 48px;

	@media (max-width: 960px) {
		grid-template-columns: 1fr;
	}
	@media (max-width: 640px) {
		grid-template-columns: 1fr;
	}
`;

const Card = styled.div`
	display: flex;
	max-height: 250px;
	min-width: 350px;
	padding: 1rem;
	flex-direction: column;
	justify-content: center;
	cursor: pointer;
	border: 1px solid transparent;
	border-radius: 20px;
	border: 1px solid var(--ifm-color-emphasis-200);
	/* flex: 1 1 0px; */

	&:hover {
		border: 1px solid var(--ifm-color-emphasis-400);
		box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);
	}

	@media (max-width: 960px) {
		width: 100%;
	}
`;

const CenterCard = styled(Card)`
	min-width: 250px;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;

	display: grid;
	grid-template-columns: 48px 1fr;
	gap: 24px;

	h3 {
		margin-bottom: 0.25rem;
	}

	p {
		margin-bottom: 0px;
	}
`;

const ShadowCard = styled(Card)`
	box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);
	background-color: #ffffff10;
	backdrop-filter: blur(10px);
	min-height: 200px;
	/* background-color: var(--ifm-color-emphasis-0); */
`;

const IconWrapper = styled.div`
	width: 32px;
	height: 32px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 4px;
`;

const TopSection = styled.div`
	width: 100%;
	align-items: center;
	justify-content: space-between;
	display: flex;
	flex-direction: row;
	margin-bottom: 1rem;
`;

const LinkRow = styled.div`
	width: 100%;
	align-items: center;
	justify-content: space-between;
	display: flex;
	flex-direction: row;
	a h3 {
		color: black !important;
	}
`;

const DocsHeader = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	width: 100%;
	position: relative;
`;

// const StyledImage = styled(ThemedImage)`
// 	position: relative;
// 	z-index: -1;
// 	width: 100%;
// 	object-fit: cover;
// `;

// const StyledTitleImage = styled(StyledImage)`
// 	width: 100%;
// 	height: 100%;
// 	object-fit: cover;
// 	z-index: -1;
// 	position: absolute;
// 	opacity: 0.2;
// 	mask-image: linear-gradient(rgba(0, 0, 0, 1), transparent);
// `;

const StyledGithubIcon = styled.div`
	svg {
		fill: var(--ifm-font-color-base);
	}
`;

const HideMedium = styled.div`
	@media (max-width: 960px) {
		display: none;
	}
`;

export default function Home() {
	return (
		<Layout title={`Kōyō Finance Docs`} description="Technical Documentation For Kōyō Finance">
			<Container>
				<DocsHeader>
					<div
						style={{
							padding: '4rem 0  ',
							textAlign: 'center',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center'
						}}
					>
						<h1 style={{ fontWeight: '600' }}> Welcome to the Kōyō Finance Documentation</h1>
						<HideMedium>
							<SearchBar />{' '}
						</HideMedium>
					</div>
					{/* <StyledTitleImage
						alt="Docusaurus themed image"
						sources={{
							light: useBaseUrl('/img/grow.png'),
							dark: useBaseUrl('/img/grow2.png')
						}}
					/> */}
					<TwoRow>
						{ActionReferences.map((action) => (
							<Link style={{ textDecoration: 'none' }} to={action.to}>
								<ShadowCard key={action.title}>
									<TopSection>
										{action.icon && (
											<IconWrapper>
												<action.icon style={{ width: '24px' }} color={action.color} />
											</IconWrapper>
										)}

										<ArrowIcon style={{ width: '24px', opacity: 0.2 }} />
									</TopSection>
									<h3 style={{ marginBottom: '.75rem', color: action.color }}>{action.title}</h3>
									<p style={{ marginBottom: '0.5rem' }}>{action.text}</p>
								</ShadowCard>
							</Link>
						))}
					</TwoRow>
				</DocsHeader>

				<TwoRow
					style={{
						gap: '56px',
						marginTop: '4rem'
					}}
				>
					<div>
						<h2>Getting Started</h2>
						<p>Explore these docs to get started integrating the Kōyō Finance in your dApp, smart contract or project.</p>
						<div>
							{Guides.map((action) => (
								<Link style={{ textDecoration: 'none' }} key={action.title} to={action.to}>
									<Card key={action.title} style={{ marginBottom: '1rem' }}>
										<LinkRow>
											<div style={{ display: 'flex', alignItems: 'center' }}>
												<h3 style={{ marginBottom: '0rem' }}>{action.title}</h3>
											</div>
											<ArrowIcon style={{ width: '24px', opacity: 0.2 }} />
										</LinkRow>
										<p style={{ marginBottom: '0rem' }}>{action.text}</p>
									</Card>
								</Link>
							))}
						</div>
					</div>
					<div>
						<h2>Developer Links</h2>
						<p>The Kōyō Finance codebase is comprised of an ecosystem of open source components.</p>
						{GithubReferences.map((action) => (
							<Link style={{ textDecoration: 'none' }} href={action.href}>
								<Card key={action.title} style={{ marginBottom: '1rem' }}>
									<LinkRow>
										<StyledGithubIcon style={{ display: 'flex', alignItems: 'center' }}>
											<GithubLogo style={{ width: '24px' }} />
											<h3 style={{ marginBottom: '0rem', marginLeft: '16px' }}>{action.title}</h3>
										</StyledGithubIcon>
										<ArrowIcon style={{ width: '24px', height: '24px', opacity: 0.2 }} />
									</LinkRow>
								</Card>
							</Link>
						))}
					</div>
				</TwoRow>

				<hr />

				{/* <TwoRow
					style={{
						gap: '48px',
						alignItems: 'center'
					}}
				>
					<StyledImage
						style={{ maxHeight: '400px' }}
						sources={{
							light: useBaseUrl('/img/use.png'),
							dark: useBaseUrl('/img/use2.png')
						}}
					/>
					<div>
						<h2>Quick Links</h2>
						<p></p>
						{quick.map((action) => (
							<Link style={{}} to={action.to || action.href}>
								<div
									style={{
										display: 'flex',
										justifyContent: 'space-between',
										marginBottom: '0.5rem'
									}}
								>
									<h3 style={{ marginBottom: '0rem' }}>{action.title}</h3>

									<ArrowIcon style={{ width: '16px', opacity: 0.2 }} />
								</div>
							</Link>
						))}
					</div>
				</TwoRow>

				<hr /> */}

				<Row
					style={{
						marginBottom: '25px'
					}}
				>
					<Link style={{ textDecoration: 'none' }} href={'https://docs.koyo.finance/discord'}>
						<CenterCard>
							<ColouredDiscordLogo style={{ width: '48px', height: '48px' }} />
							<div>
								<h3>Discord</h3>
								<p>Hop in to the #dev-chat to get realtime help.</p>
							</div>
						</CenterCard>
					</Link>
					<Link style={{ textDecoration: 'none' }} href={'https://governance.koyo.finance/'}>
						<CenterCard>
							<ChatIcon style={{ width: '48px', height: '48px' }} />
							<div>
								<h3>Forum</h3>
								<p>Discuss governance and more.</p>
							</div>
						</CenterCard>
					</Link>

					<Link style={{ textDecoration: 'none' }} href={'https://docs.koyo.finance/github'}>
						<CenterCard>
							<StyledGithubIcon>
								<GithubLogo style={{ width: '48px' }} />{' '}
							</StyledGithubIcon>
							<div>
								<h3>GitHub</h3>
								<p>View all Kōyō Finance repositories.</p>
							</div>
						</CenterCard>
					</Link>
				</Row>
			</Container>
		</Layout>
	);
}

export interface Actions {
	title: string;
	href?: string;
	icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
	to?: string;
	text: string;
	color?: string;
}
