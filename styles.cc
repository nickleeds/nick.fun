/* styles.css */

body {
    font-family: 'Roboto', sans-serif;
    background: #f1f2f6;
    color: #000;
    margin: 0;
    padding: 0;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.site-title {
    max-width: 100%;
    width: 200px;
    display: block;
    margin: 50px auto 30px;
}

.site-tagline {
    text-align: center;
    font-size: 24px;
    margin-bottom: 30px;
    opacity: 0.7;
}

.posts {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
    justify-content: center;
    margin-top: 20px;
}

.link {
    border-radius: 10px;
    background: #fff;
    display: block;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    transition: transform 0.2s ease-in-out;
}

.link:hover {
    transform: translateY(-5px);
}

.link-img {
    width: 100%;
    height: auto;
    display: block;
    transition: opacity 0.2s ease-in-out;
}

.socials {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.social-btn {
    border: 1px solid #000;
    border-radius: 12px;
    padding: 10px 18px 8px 12px;
    display: flex;
    align-items: center;
    color: #000;
    text-decoration: none;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
}

.social-btn:hover {
    transform: scale(1.04);
}

.social-btn-icon {
    height: 26px;
    margin-right: 10px;
}
