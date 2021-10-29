import * as React from 'react'

export default function Header() {
    return (
        <header>
            <nav class="header-main-nav">
                <div class="header-logo">DATPLATE</div>
                <div class="header-searchbar">
                    <input class="search-text" type="text" placeholder="Search..."></input>
                </div>
                <div class="ul-icons">
                    <a href="#">Liked</a>
                    <a href="#">Cart</a>
                    <a href="#">Sign in</a>
                </div>
                
            </nav>
        </header>
        
    )
}
