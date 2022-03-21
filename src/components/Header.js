import React, { Fragment, useState } from 'react';
import { makeStyles } from '@mui/styles';
import {
    AppBar,
    Box,
    Toolbar,
    Button,    
    IconButton,   
    Container,  
    List,
    ListItem
} from '@mui/material';
import { useHistory } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

// import LogoImage from '../assets/images/logo.png';
import TelegramImage from '../assets/images/telegramapp.svg';
import TwitterImage from '../assets/images/twitterico.svg';

const useStyles = makeStyles(theme => ({
	appBar: {
		padding: '14px 0',
		backgroundColor: 'transparent!important',
		boxShadow: 'none!important',
	},
	menuButton: {
		display: 'block!important',
		color: '#fff!important',
		fontSize: '18px!important',
		fontWeight: '400!important',
		textTransform: 'capitalize!important',
	},
	mobileListItem: {
		fontSize: '20px!important',
		color: '#000000cc!important',
		textTransform: 'capitalize!important',
		marginBottom: '8px!important'
	}
}));

export default function ButtonAppBar() {
	const classes = useStyles();
	const history = useHistory();    
	const [mobileDrawer, setMobileDrawer] = useState(false);    

	return (
		<Fragment>
			<AppBar position="fixed" sx={{
				padding: '14px 0',
				backgroundImage: 'linear-gradient(180deg, #393939, #0b0a0f)',
				boxShadow: 'none',
				height: { xs: 84, sm: 96 }
			}}>
				<Container>
					<Toolbar disableGutters sx={{ justifyContent: 'flex-end' }}>
											{/* <Box
													component="img"
													src={LogoImage}
													alt=""
													sx={{ width: { xs: 120, sm: 140, md: 160, xl: 180 } }}
											/> */}
						<Box
							sx={{
								flexGrow: 1, 								
								display: 'flex',
								justifyContent: 'space-between',								
							}}
						>
							<Box
								sx={{
									display: 'none',
									justifyContent: 'flex-start',
									"@media (min-width: 1024px)": {
										display: 'flex'
									}
								}}
							>
								<Button 
									className={classes.menuButton}
									sx={{ mr: {md: '10px', lg: '24px'} }}
									onClick={() => history.push('/home')}
								>
									Home
								</Button>
								<Button 
									className={classes.menuButton}
									sx={{ mr: {md: '10px', lg: '24px'} }}
									onClick={() => history.push('/about')}
								>
									About
								</Button>
								<Button 
									className={classes.menuButton}
									sx={{ mr: {md: '10px', lg: '24px'} }}
									onClick={() => history.push('/tokenmetrics')}
								>
									Tokenmetrics
								</Button>
							</Box>   
							<Box>
								<Button href="https://twitter.com/AKITA_network" target="_blank">
									<Box
										component="img"
										src={TwitterImage}									
										alt=""
										sx={{ width: { xs: 48} }}									
									/>
								</Button>
								<Button href="https://t.me/akitatoken" target="_blank">
									<Box
										component="img"
										src={TelegramImage}									
										alt=""
										sx={{ width: { xs: 48} }}
									/>			
								</Button>					
							</Box>                         
						</Box>                        
						<Box sx={{ flexGrow: 0 }}>                                                            
							<IconButton
								onClick={() => setMobileDrawer(true)}
								sx={{
									display: 'inline-flex',
									color: '#fff',
									"@media (min-width: 1024px)": {
										display: 'none'
									}
								}}
							>
								<MenuIcon />
							</IconButton>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
			<Box
				sx={{
					position: 'fixed',
					top: 0,
					right: 0,
					bottom: 0,
					overflow: 'auto',
					backgroundColor: '#fff',
					minWidth: 280,
					padding: { xs: '24px 16px', sm: '24px' },
					zIndex: 2000,
					transition: 'transform 0.3s',
					transform: mobileDrawer ? 'translateX(0)' : 'translateX(100%)'
				}}
			>
				<Box sx={{
					display: 'flex',
					justifyContent: 'flex-end',
					py: { xs: '2px', sm: '10px' }
				}}>
					<IconButton onClick={() => setMobileDrawer(false)}>
						<CloseOutlinedIcon />
					</IconButton>
				</Box>
				<List sx={{
						mb: '20px'
				}}>
					<ListItem
						component={Button}
						className={classes.mobileListItem}
						onClick={() => history.push('/home')}
					>
						Home
					</ListItem>
					<ListItem
						component={Button}
						className={classes.mobileListItem}
						onClick={() => history.push('/about')}
					>
						About
					</ListItem>
					<ListItem
						component={Button}
						className={classes.mobileListItem}
						onClick={() => history.push('/tokenmetrics')}
					>
						Tokenmetrics
					</ListItem>                    
				</List>                
			</Box>
		</Fragment>
	);
}