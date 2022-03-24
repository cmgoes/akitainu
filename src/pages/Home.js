import React from 'react';
import { makeStyles } from '@mui/styles';
import {
	Box,
	Container,
	Typography,	
	IconButton,
	Link
} from '@mui/material';
import ApexChart from '../components/ApexChart';
// import BackgroundImage from '../assets/images/background.png';
import GooglePlusIcon from '../assets/images/Google+.svg';
import FacebookIcon from '../assets/images/Facebook.svg';
import InstagramIcon from '../assets/images/Instagram.svg';
import TwitterIcon from '../assets/images/Twitter.svg';
import AkitaImage from '../assets/images/akitadog.webp';
import ElonImage from '../assets/images/elon.webp';
import DodgeImage from '../assets/images/doge.webp';

const useStyles = makeStyles(theme => ({
	actionButton: {
		color: '#fff!important',
		textTransform: 'capitalize!important',
		padding: '10px 18px!important',
		borderRadius: '28px!important'
	},
	socialButtton: {
		backgroundColor: '#c54523!important',
		width: '48px!important',
		height: '48px!important',
		marginRight: '15px!important',
		"&:hover": {
				backgroundColor: '#c54523!important',
		}
	}
}));

const Home = () => {
	const classes = useStyles();
	const communities = [{title: 'COMMUNITY', text: 'AKITA is an experiment in decentralized community driven. No founders, no team tokens. This groups purpose is to allocate skills within the community to appropriate roles in ATIKA development and collectively agree on decisions for ATIKA future.'}, 
	{title: 'MEME-Based', text: 'Like crypto, memes were born on the internet and have journeyed from the fringes to the mainstream. They’re used to drive adoption of cryptocurrency, signal bullishness or bearishness on certain assets or coins by traders and even boost the value of tokens.'}, 
	{title: 'TRUST', text: 'We locked 50% of the total supply to Uniswap and threw away the keys! The remaining 50% was burned to Vitalik Buterin.  There is no greatness without a vulnerable point and as long as VB doesn’t rug us, then AKITA will grow, survive and develop. We believe everyone should have an equal chance to own ATIKA, there is no team token. Everyone has to buy on the open market, this means devs have no more right for ownership than anybody else in the world.'}];
	
	const tokenmetrics = [{title: 'TOTAL SUPPLY', head: '100,000,000,000,000 AKITA', text: '1/10 of the total supply of SHIBU INU (SHIB)'}, 
	{title: '50% of Total Supply', head: 'Vitalik Buterins Wallet', text: '50% of the supply was sent to Vitalik Buterins wallet'}, 
	{title: '50% of the Supply', head: 'Locked in Uniswap Pool', text: 'We locked 50% of the total supply to uniswap and threw away the keys!'}];
	
	const renderCommunity = (key, title, text) => (
		<Box
		  sx={{
				px: {xs: '16px', md: '20px', lg: '24px'}
			}}
		>
			<Typography
				variant='h3'
				textAlign="center"
				sx={{
					fontSize: { xs: 24, md: 32, lg: 36, xl: 40 },
					fontFamily: 'Oswald-Bold',
					textTransform: "uppercase",
					maxWidth: { xs: 600, lg: 800, xl: 870 },
					mb: '30px',
					mx: 'auto',
					color: '#fff'
				}}
			>
				{title}
			</Typography>
			<Typography
				variant='h5'
				textAlign="center"
				sx={{
					fontSize: { xs: 16, sm: 18 },
					fontWeight: 400,
					maxWidth: 675,
					textTransform: 'uppercase',
					color: '#fff',
					mx: 'auto',
					mb: '30px'
				}}
			>
				{text}
			</Typography>
		</Box>
	);

	const renderTokenmetrics = (key, title, head, text) => (
		<Box
		  sx={{
				px: {xs: '16px', md: '20px', lg: '24px'}
			}}
		>
			<Typography
				variant='h3'
				textAlign="center"
				sx={{
					fontSize: { xs: 24, md: 32, lg: 36, xl: 40 },
					fontFamily: 'Oswald-Bold',
					textTransform: "uppercase",
					maxWidth: { xs: 600, lg: 800, xl: 870 },
					mb: '40px',
					mx: 'auto',
					color: '#fff'
				}}
			>
				{title}
			</Typography>
			<Typography
				variant='h5'
				textAlign="center"
				sx={{
					fontSize: { xs: 18, sm: 20 },
					fontWeight: 400,
					maxWidth: 675,
					textTransform: 'uppercase',
					color: '#fff',
					mx: 'auto',
					mb: '30px'
				}}
			>
				{head}
			</Typography>
			<Typography
				variant='h5'
				textAlign="center"
				sx={{
					fontSize: { xs: 16, sm: 18 },
					fontWeight: 400,
					maxWidth: 675,
					textTransform: 'uppercase',
					color: '#fff',
					mx: 'auto',
					mb: '20px'
				}}
			>
				{text}
			</Typography>
		</Box>
	);

	return (
		<Box sx={{
			backgroundColor: `#000000`,            
			display: 'flex',
			flexDirection: 'column',            
			pt: { xs: '84px', sm: '108px' }
		}}>
			<Box
				component={Container}
				sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexGrow: '1',
				py: '30px'
			}}>
				<Box>
					<Box
						component="img"
						src={AkitaImage}									
						alt=""
						sx={{ width: { xs: 120}, display: "block", mx: "auto", my: {xs: '16px', md: '24px' } }}									
					/>
					<Typography
						variant='h1'
						textAlign="center"
						sx={{
							fontSize: { xs: 32, md: 44, lg: 52, xl: 60 },
							fontFamily: 'Oswald-Bold',
							textTransform: "uppercase",
							maxWidth: { xs: 600, lg: 800, xl: 870 },
							mb: '30px',
							mx: 'auto',
							color: '#fff'
						}}
					>
						Akita Inu 秋田犬
					</Typography>
					<Typography
						variant='h4'
						textAlign="center"
						sx={{
							fontSize: { xs: 16, sm: 20 },
							fontWeight: 400,
							maxWidth: 675,
							textTransform: 'uppercase',
							color: '#E19531',
							mx: 'auto',
							mb: '30px'
						}}
					>
						Meme token
					</Typography>
					<Typography
						variant='h4'
						textAlign="center"
						sx={{
							fontSize: { xs: 16, sm: 20 },
							fontWeight: 400,
							maxWidth: 675,
							color: '#fff',
							mx: 'auto',
							mb: '57px'
						}}
					>
						AKITA INU 秋田犬 is a 100% decentralized community experiment with it claims that 1/2 the tokens have been sent
						 to Vitalik Buterin and the other half were locked to a Uniswap pool and the keys burned.<br/><br/>
						 It is same as SHIBA INU but with different tokenmetrics<br/><br/>
						 Inspired by elon musk and dogecoin
					</Typography>				
					<Box sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'space-between',
						mb: '76px',
						"@media (min-width: 1024px)": {
							flexDirection: "row"
						}
					}}>
						<Box
							component="img"
							src={ElonImage}									
							alt=""
							sx={{ width: { xs: 240, md: 300}, mb: '24px' }}									
						/>
						<Box
							component="img"
							src={DodgeImage}									
							alt=""
							sx={{ width: { xs: 240, md: 300} }}									
						/>
					</Box>
					<ApexChart />
					<Typography id="about"
						variant='h4'
						textAlign="center"
						sx={{
							fontSize: { xs: 16, sm: 20 },
							fontWeight: 400,
							maxWidth: 675,
							textTransform: 'uppercase',
							color: '#E19531',
							mx: 'auto',
							mb: '50px',
							mt: '50px',
						}}
					>
						Little brother of dogecoin
					</Typography>
					<Box 
						sx={{
							display: 'flex',
							flexDirection: 'column',
							// alignItems: 'center',
							justifyContent: 'space-between',
							mb: '76px',
							"@media (min-width: 1024px)": {
								flexDirection: "row"
							}
						}}
					>
						{communities.map((community, key) => 
							renderCommunity(
								key,
								community.title,
								community.text
							)
						)}
					</Box>
					<Typography 
						id="tokenmetrics"
						variant='h2'
						textAlign="center"
						sx={{
							fontSize: { xs: 28, md: 40, lg: 48, xl: 60 },
							fontFamily: 'Oswald-Bold',
							textTransform: "uppercase",
							maxWidth: { xs: 600, lg: 800, xl: 870 },
							mb: '60px',
							mx: 'auto',
							color: '#fff'
						}}
					>
						Tokenmetrics
					</Typography>
					<Box 
						sx={{
							display: 'flex',
							flexDirection: 'column',
							// alignItems: 'center',
							justifyContent: 'space-between',
							mb: '76px',
							"@media (min-width: 1024px)": {
								flexDirection: "row"
							}
						}}
					>						
						{tokenmetrics.map((tokenmetric, key) => 
							renderTokenmetrics(
								key,
								tokenmetric.title,
								tokenmetric.head, 
								tokenmetric.text
							)
						)}
					</Box>

					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center'
						}}
					>
						<IconButton
							component={Link}
							href="https://google.com/"
							target="_blank"
							className={classes.socialButtton}
						>
							<img src={GooglePlusIcon} alt="" />
						</IconButton>
						<IconButton
							component={Link}
							href="/"
							target="_blank"
							className={classes.socialButtton}
						>
							<img src={FacebookIcon} alt="" />
						</IconButton>
						<IconButton
							component={Link}
							href="/"
							target="_blank"
							className={classes.socialButtton}
						>
							<img src={TwitterIcon} alt="" />
						</IconButton>
						<IconButton
							component={Link}
							href="/"
							target="_blank"
							className={classes.socialButtton}
						>
							<img src={InstagramIcon} alt="" />
						</IconButton>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}

export default Home;