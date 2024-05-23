import React from "react";
import './Footer.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import CopyrightIcon from '@mui/icons-material/Copyright';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const link = 'https://www.google.com/search?sca_esv=0843bae45ef7a677&sca_upv=1&hl=pl&tbm=lcl&sxsrf=ACQVn08N5IDK2ylQnutovcgnk86-u2Wj2A:1714565617828&q=Dobre%20Wibracje%20-%20Gabinet%20Neurologopedyczny%20-%20Ma%C5%82gorzata%20Kindlik%20Opinie&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2NzOztDQ3MjEzMLWwNDexMDIx3MDI-IrR3SU_qShVITwzqSgxOStVQVfBPTEpMy-1RMEvtbQoPyc_Pb8gNaUyuSqvEijnm3i0KT2_qCqxJFHBOzMvJSczW8G_IDMvM3URK7VMAgCm6QH1rgAAAA&rldimm=7669972460589748241&sa=X&ved=0CAkQ5foLahcKEwjAg77VtuyFAxUAAAAAHQAAAAAQBQ&biw=2560&bih=1353&dpr=1#lkt=LocalPoiReviews&arid=ChdDSUhNMG9nS0VJQ0FnSURqc3BfWXpnRRAB';

const Footer = () => {
    let year = new Date().getFullYear();
    return (
      <section id="contact" className="contact-wrapper">
        <div className="paddings innerWidth c-container">
          <div className="flexSpaceBetween contact-options">
            <div className="flexCenter logo logo-footer">
                <img src="logo.png" alt="logo" height={65}/>
                <div>Dobre wibracje</div>
            </div>
            <div className="flexStart el-container">
              <div className="flexInfo">
                <div>
                  <Stack alignItems="center" direction="row" gap={0.5}>
                    <LocationOnIcon className="icon" />
                    <Typography  variant="body1"><a href={link} target="_blank"><span className="contactEl">Puchacza 2, 20-323 Lublin</span></a></Typography>
                  </Stack>
                </div>
                <div>
                  <Stack alignItems="center" direction="row" gap={0.5}>
                    <EmailIcon className="icon" />
                    <Typography variant="body1"><a href="mailto:malgorzata.kindlik@op.pl"><span className="contactEl">malgorzata.kindlik@op.pl</span></a></Typography>
                  </Stack>
                </div>
              </div>
              <div className="flexInfo">
                <div>
                  <Stack alignItems="center" direction="row" gap={0.5}>
                    <LocalPhoneIcon className="icon" />
                    <Typography  variant="body1"><a href="tel:602243373"><span className="contactEl">+ 48 602 243 373</span></a></Typography>
                  </Stack>
                </div>
                <div>
                  <Stack alignItems="center" direction="row" gap={0.5}>
                    <FacebookIcon className="icon" />
                    <Typography  variant="body1"><a target="_blank" href="https://www.facebook.com/profile.php?id=61558598265042"><span className="contactEl">Dobre Wibracje</span></a></Typography>
                  </Stack>
                </div>
              </div>   
            </div>
          </div>
          <footer className="secondaryText">
          <Stack alignItems="center" direction="row" gap={0.5}>
            <CopyrightIcon />
            <Typography variant="body1">Copyright {year}, All rights reserved</Typography>
          </Stack>
          </footer>
        </div>
      </section>
      
    );
  };
  
  export default Footer;