import React from 'react'

export default function Footer() {

    return (
        <>
            <footer className="footer bg-base-200 text-base-content p-10 mt-10 grid lg:grid-cols-3 gap-5 place-items-start lg:place-items-center">
                <nav>
                    <h6 className="footer-title">ABOUT US</h6>
                    <p className="">Tyke is the US's largest independent spare parts importer. We have products for almost all vehicle models. From motor oil, tyres to all kinds of spare parts, we have all what is required to maintain your vehicle</p>
                    <p className="flex justify-center gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        (555) 555-1234
                    </p>
                    <p className="flex justify-center gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        45, States Avenue, New York, US
                    </p>
                    <p className="flex justify-center gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>

                        info@tyke.com
                    </p>
                </nav>
                <nav>
                    <h6 className="footer-title">Information</h6>
                    <a className="link link-hover">- Home</a>
                    <a className="link link-hover">- Shop</a>
                    <a className="link link-hover">- About Us</a>
                    <a className="link link-hover">- Contact Us</a>
                </nav>
                <form>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="footer-title">SIGN UP FOR OUR AWESOME NEWS</span>
                        </label>
                        <div className="flex flex-col gap-5">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item" />
                            <button className="btn btn-outline">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
        </>
    )
}
