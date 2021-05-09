import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Index.module.scss";
import {
    API_URL,
    AVAILABLE_TOKENS_QUERY,
    SOLD_TOKENS_IN_HOME,
    SOLD_TOKENS_QUERY,
    TOKENS_IN_HOME,
    UPCOMING_TOKENS_QUERY,
    UPCOMING_TOKENS_IN_HOME,
} from "../utils/constants";
import { NFT, Slide } from "../types";
import Auctions from "../components/Auctions";
import ActiveAuctions from "../components/ActiveAuctions";
import Slider from "../components/Slider";
import HeadWithImage from "../components/HeadWithImage";
// index page start
export const DemoHome: React.FC<{
    assets: NFT[];
    sold: NFT[];
    upcoming: NFT[];
    slides: Slide[];
}> = ({ assets, slides, sold, upcoming }) => {
    return (
        <div className={styles.container}>
            <div className={styles.main_container}>
                <section className={styles.auction_section}>
                    <table width="97%">
                        <tbody>
                            <tr>
                                <td>
                                    <div className={styles.nft_item}><iframe src="./PEGZ_files/ksk65m.html" frameborder="0" width="100%" height="100%" allowfullscreen="" allow="autoplay" className={styles.nft_iframe}></iframe></div>
                                    <div className={styles.center_item}><img src="./PEGZ_files/01creeper_icon133.png" width="18%" /></div>
                                </td>
                                <td>
                                    <div className={styles.nft_item}><iframe src="./PEGZ_files/e9hkir.html" frameborder="0" width="100%" height="100%" allowfullscreen="" allow="autoplay" className={styles.nft_iframe}></iframe></div>
                                    <div className={styles.center_item}><img src="./PEGZ_files/02sherher_icon133.png" width="18%" /></div>
                                </td>
                                <td>
                                    <div className={styles.nft_item}><iframe src="./PEGZ_files/v9pq1c.html" frameborder="0" width="100%" height="100%" allowfullscreen="" allow="autoplay" className={styles.nft_iframe}></iframe></div>
                                    <div className={styles.center_item}><img src="./PEGZ_files/03smiler_icon133.png" width="18%" /></div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className={styles.nft_item}><iframe src="./PEGZ_files/nh0bjz.html" frameborder="0" width="100%" height="100%" allowfullscreen="" allow="autoplay" className={styles.nft_iframe}></iframe></div>
                                    <div className={styles.center_item}><img src="./PEGZ_files/04stoner_icon133.png" width="18%" /></div>
                                </td>
                                <td>
                                    <div className={styles.nft_item}><iframe src="./PEGZ_files/hzo3y7.html" frameborder="0" width="100%" height="100%" allowfullscreen="" allow="autoplay" className={styles.nft_iframe}></iframe></div>
                                    <div className={styles.center_item}><img src="./PEGZ_files/05bootlegger_icon133.png" width="18%" /></div>
                                </td>
                                <td>
                                    <div className={styles.nft_item}><iframe src="./PEGZ_files/88mojs.html" frameborder="0" width="100%" height="100%" allowfullscreen="" allow="autoplay" className={styles.nft_iframe}></iframe></div>
                                    <div className={styles.center_item}><img src="./PEGZ_files/06muncher_icon133.png" width="18%" /></div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className={styles.nft_item}><iframe src="./PEGZ_files/0592ol.html" frameborder="0" width="100%" height="100%" allowfullscreen="" allow="autoplay" className={styles.nft_iframe}></iframe></div>
                                    <div className={styles.center_item}><img src="./PEGZ_files/07pecker_icon133.png" width="18%" /></div>
                                </td>
                                <td>
                                    <div className={styles.nft_item}><iframe src="./PEGZ_files/ij7jaa.html" frameborder="0" width="100%" height="100%" allowfullscreen="" allow="autoplay" className={styles.nft_iframe}></iframe></div>
                                    <div className={styles.center_item}><img src="./PEGZ_files/08slimer_icon133.png" width="18%" /></div>
                                </td>
                                <td>
                                    <div className={styles.nft_item}><iframe src="./PEGZ_files/q3mxv4.html" width="100%" height="100%" allow="autoplay" className={styles.nft_iframe}></iframe></div>
                                    <div className={styles.center_item}><img src="./PEGZ_files/09licker_icon133.png" width="18%" /></div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className={styles.nft_item}><iframe src="./PEGZ_files/jcwhos.html" frameborder="0" width="100%" height="100%" allowfullscreen="" allow="autoplay" className={styles.nft_iframe}></iframe></div>
                                    <div className={styles.center_item}><img src="./PEGZ_files/10peper_icon133.png" width="18%" /></div>
                                </td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section className={styles.right_section}>
                    <div className={styles.logomovie}>
                        <div className={styles.logomovie_item}>
                            <iframe src="./PEGZ_files/6l7pv5.html" frameborder="0" width="100%" height="100%" allowfullscreen="" allow="autoplay" className={styles.logomovie_iframe} />
                        </div>
                    </div>
                    <div className={styles.center_item}>
                        <img src="./PEGZ_files/bymattfurie.png" width="68%" />
                    </div>
                    <div className={styles.center_item}>
                        <img src="./PEGZ_files/parameterz.png" width="45%" />
                    </div>
                    <div className={styles.center_item}>
                        <img src="./PEGZ_files/signup.png" width="45%" />
                    </div>
                
                    <div className={styles.mc_embed_signup}>
                        <form action="https://fun.us1.list-manage.com/subscribe/post?u=fd780084ff583a4d5cd703a23&amp;id=8f68958589" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className={styles.center_item} target="_blank">
                            <div id="mc_embed_signup_scroll">
                                <input type="email" value="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" /> <br />
                                <div className={styles.mc_embed_signup_scroll_item} aria-hidden="true">
                                    <input type="text" name="b_fd780084ff583a4d5cd703a23_8f68958589" value="" />
                                </div>
                                <div><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" /></div>
                            </div>
                        </form>
                    </div>
                    <div className={styles.center_item}>
                        <img src="./PEGZ_files/nevermiss3.png" width="45%" />
                    </div>

                    <div className={styles.social}>
                        <div className="divsocial"> <a href="https://twitter.com/matt_furie"> <img id="imgsocial" src="./PEGZ_files/mtwitter.png" /></a></div>
                        <div className="divsocial"> <a href="https://www.instagram.com/pegzpegzpegz/"> <img id="imgsocial" src="./PEGZ_files/mig.png" /></a></div>
                        <div className="divsocial"> <a href="https://discord.com/invite/aXQqKxKggh"> <img id="imgsocial" src="./PEGZ_files/mdiscord.png" /></a></div>
                    </div>
                    <h2 className={styles.social_text_content}> @ 2021 PEGZ | <a href="https://www.mattfurie.com/">MATT FURIE</a> | <a href="https://www.chainsaw.fun/">CHAIN/SAW</a></h2>
                    <br />
                    <br />

                    <div className={styles.center_item}>
                        <img src="./PEGZ_files/fuckyeah.png" width="78%" />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default DemoHome;

export async function getStaticProps() {
    /** Get tokens with auctions */
    const availableTokenRes = await fetch(
        `${API_URL}/tokens?_limit=${TOKENS_IN_HOME}&${AVAILABLE_TOKENS_QUERY}`,
    );
    const availableTokens = await availableTokenRes.json();

    /** Get tokens sold */
    const soldTokensRes = await fetch(
        `${API_URL}/tokens?_limit=${SOLD_TOKENS_IN_HOME}&${SOLD_TOKENS_QUERY}`,
    );
    const sold = await soldTokensRes.json();

    /** Get tokens not on sale and not sold */
    const upcomingTokensRes = await fetch(
        `${API_URL}/tokens?_limit=${UPCOMING_TOKENS_IN_HOME}&${UPCOMING_TOKENS_QUERY}`,
    );
    const upcoming = await upcomingTokensRes.json();

    /** Get slides */
    let slides = [];
    try {
        const slidesRes = await fetch(`${API_URL}/slider`);
        const sliderData = await slidesRes.json();
        slides = sliderData.slides as Slide[];
    } catch (err) {
        console.log("Exception in loading slides, defaulting to empty list");
    }

    return {
        props: {
            assets: availableTokens,
            sold,
            upcoming,
            slides,
        },
    };
}
