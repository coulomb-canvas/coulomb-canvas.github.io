---
subid: exoplanets
title: Exoplanets
topic: astro
---

Now that we've finished dealing with the solar system, it's about time we answer the question WE have all been wanting to know the answer to.

"Which planet in the universe is the prettiest?"

Yes, bro, WE are challenging the other planets to a pretty off. It seems that nearly every star has planets which orbit it, which is being signed up for the competition. And I know what you're thinking, "isn't this kind of a vain thing to be worried about? How the hell would we even judge such a thing as how pretty a planet is?"

To answer the second question, when I talk about the prettiest planet in the universe, I'm looking for the *exoplanet* with the most interesting atmosphere (exoplanet being the name of the planet contestants outside of the solar system). We obviously know our own is mostly nitrogen and oxygen, which is pretty bloody interesting if you ask me. The rest of the solar system planets either have hydrogen and helium atmospheres or none at all, which is not as interesting in my humble opinion.

So we want to see if there are any planets in the universe with similar or better elements in the atmosphere (better according to me, that is...)

And then to answer the first question... yes? What kinda question is that? Surely you've been 'ere long enough to know that 'vanity' is like my middle name or something, right?

Then again, even learning about the atmospheres of other solar system planets is pretty difficult, what more planets in other solar systems, or other galaxies even? Well never fear! With a bit of grift, it IS still somewhat possible. So in this section, we'll learn how to get information about exoplanets.

### Finding Exoplanets

First we'll go over how exactly to find these exoplanets. And you might think it's as simple as pointing a telescope at a star and looking at them, except for a slight problem. Exoplanets don't reflect a great deal of light, meaning they are really bloody faint, often too faint to be seen with a telescope. 

For this reason, *direct imaging* (the proper name for 'just looking at it') is usually off the table. It's not impossible though, we can still use this in the case of planets which are very far apart of very young. If they are far apart, then resolving with a telescope is EZ PZ lemon squeee-Z (ea-zed pea-zed lemon squee-zed?), and if the planet is a newborn baby then it's usually still quite bright from the heat of the moment (the 'moment' in question being its formation).

However most planets don't have either of these benefits, so how do we look at them and determine whether they are pretty or not?

There are a few workarounds, four of which we'll go over.

#### 1. The Radial Velocity Method

Here's something you may not have considered. We obviously know that planets feel the gravitational pull of the stars they orbit. I mean that's the reason they orbit them anyway, as opposed to just flying off into oblivion.

But remember that *all* masses have a gravitational pull. Meaning the planets also have a relatively slight but non-zero gravitational pull on the star.

<p>Using the same 'two-bodies-orbiting-a-common-centre-of-mass' logic from back when we spoke about <a href="http://127.0.0.1:5500/subtopic.html?subid=masses&topic=astro&year=1">binary stars</a>, we know that the masses and radii of two rotating objects are related. Take Jupiter and the sun for example</p> \[ M_\odot r_\odot = M_J r_J \] \[ \downarrow \] \[ r_\odot = \frac{M_J}{M_\odot} r_J \]

<p>The sun of course is the reason Jupiter has a circular orbit, but using binary star logic, Jupiter is also giving the sun a much smaller circular orbit. If you look at that from a distance, it will look like the sun has a very slight wobble. We can figure out the speed of this wibbliness by plugging in the appropriate values:</p> \[ M_J \approx 0.001 M_\odot, \quad r_J \approx 5.2AU \] \[ \downarrow \] \[ r_\odot = 780000 \text{ km} \]

<p>Then since speed is just distance over time (distance being \( 2\pi r \) and time being the period of Jupiter's orbit, \( P_J \approx 11.9 \text{ years}\)), we can get the speed at which the sun moves because of Jupiter:</p> \[ v_\odot = 13 \text{ m s}^{-1} \]

So if we detect a star with a 13 metre per second wobble, we can assume that if the star is similar to our sun, it's being orbitted by a Jupiter-flavoured planet. Which brings us to our next question... *HOW* do we measure how much a star wobbles?

After all, 13 m/s is, in the grand scheme of things, pretty damn small. And it's not like we can just go and measure it can we?

Now on the one hand, we could just look at the star and hope that we do just notice this very slight wobble. This is known as *astrometry*. Then again, For a Jupiter-like planet around a star 10 pc away, this motion amounts to about **1 milliarcsecond**. Which is *barely* detectable even with modern technology.

*I can NOT be the only person who looked at this the first time and read it as "astronomy", and thought "ain't astronomy what we've been doing all this while?" before looking at it more carefully and realising it's astro**metry**..*

<p>So then how do we measure this shift? Answer is we use the <em>Doppler effect</em>. As the star wobbles towards us, its light gets slightly blueshifted (since the waves are getting squished). As it wobbles away, slightly redshifted (since the waves are getting stretched). The fractional wavelength shift we're looking for is:</p>\[ \frac{\Delta\lambda}{\lambda} = \frac{v}{c} = \frac{13}{3\times10^8} \approx 4.3\times10^{-8} \]

And whilst I've proposed this Doppler stuff as a solution, at 550 nm, that's a shift of **0.000024 nm**. Which is still really really *really* small (4 whole zeros after the decimal point?), meaning you need a very precise detector


#### 2. The Transit Method

Assuming we look at a planet's orbit of its star head-on, then at some point in it's orbit it will cover part of the star it's orbiting. That means that the sun will get very slightly dimmer, due to some of the star's light being covered.

We can measure how much dimmer the star will get, simply by taking the area the planet covers (\\( \\pi R_P^2 \\)) and dividing it by the area the star takes up (\\( \\pi R_S^2 \\)), to get a ratio of the two areas. Since the areas of the bodies correlate to the amount of light emitted (by the star) or blocked (by the planet), this'll tell us how much dimmer it gets. And this ratio is called the *transit depth*, \\( \delta \\)

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ \delta = \left(\frac{R_P}{R_S}\right)^2 \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Transit Depth
        </div><div class="formula-tooltip-desc">
            The transit depth is how much dimmer the star gets when an exoplanet goes in front of it. It's just the area of the planet divided by the area of the star.
        </div></span>
    </div>
</div>

A bit like the velocity method though, this only really works for quite big planets. For a Jupiter-sized planet around a Sun-like star, the transit depth is about 1%. But for a planet about the size of Earth, the transit depth is only about 0.01%. I mean think about your TV or something. Do you notice when you drop or increase the brightness setting by 1%? Barely right? Now imagine a hundredth of that, d'you think you'd bloody notice? Didn't think so

And in case you are interested, we can also calculate how lond this transit lasts. The **duration** of a transit depends on orbital radius and period:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ D = \frac{P}{\pi}\sin^{-1}\left(\frac{R_P + R_S}{a}\right) \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 2: Transit duration
        </div><div class="formula-tooltip-desc">
            The length of time an exoplanet spends in front of its star is given by this long-ass equation here
        </div></span>
    </div>
</div>

A hot Jupiter on a few-day orbit transits for around **4 hours**. An Earth-like planet takes about **12 hours** to cross. And you have to catch it in the act, which means staring at the same star for a very long time. Patience is a virtue. So is a space telescope.

#### Microlensing

Remember last time where massive objects were able to bend light (*gravitational lensing*)? Turns out you can use that to find planets too. Exciting right, I can see you on the edge of your seat wondering how the hell this is possible. Well don't worry, I'll tell you!

<div class="container">
    <!-- DIVIDING LINE -->
    <div class="image">
        <div class="image-floater">
            <div class="image-box left-box">
                <img src="images/Astronomy/Microlensing.png" class="pop-image" style="max-width: 100%; width: 100vw"/>
            </div>
            <span class="image-tooltip left-box" style="left:100%;"> <div class="image-tooltip-title">
                Figure 1: Microlensing
            </div><div class="image-tooltip-desc">
                At the point where the planet goes in front of the star, the signal peaks slightly, due to gravitational lensing.
            </div></span>
        </div>
    </div>
    <!-- DIVIDING LINE -->
    <div class="text">
        <p> 
            When a foreground star passes in front of a background star, it acts as a lens and temporarily magnifies the background star's light. This happens in the form of stars magnifying other stars all the time, but in the rare instance that the foreground object just so happens to have a planet, the planet causes an <em>additional</em> blip in the light curve.
        </p>
        <p>
            The Einstein Ring Radius for a typical star in our galaxy works out to about 1 or 2 Astronomical units. Baring in mind that an astronomical unit is an earth-to-sun distance, that would mean 1-2 AU is round about the Goldilocks Zone (i.e. the inhabitable planet zone). Ain't that convenient, microlensing gives us a way for finding potentially habitable worlds that the other methods would completely miss.
        </p>
    </div>
    <!-- DIVIDING LINE -->
</div>

### Exoplanet Atmospheres

Now we know how to locate a few of these exoplanets, now we need to know if they are pretty. We do this by looking at their atmospheres. There are 2 ways we'll look at here:

#### Transit Spectroscopy

If you scroll us a little bit (or press the hamburger menu and then press the button which says "2. The Transit Method") you'll realise that I spoke about using stars which go in front of planets as a way to determine the size of these exoplanets, based on the assumption that planets are solid objects which block all light. But think about it. The atmosphere of any planet is made mostly of gas. That wouldn't block light completely.

Once the planet transits in front of the star, it actually just illuminates the atmosphere in a weird way. Since different elements absorb different frequencies of light. So if we were to look at the planet transiting across the star at that frequency (using like a filter or something, idk), the planet would look a little bit bigger because the planet AND it's atmosphere are blocking the star. Then by identifying the wavelength and which chemicals absorb it, we can learn a thing or two about what is in the planet's atmosphere.

<p>Going back to our previous discussions of transit, we know that the transit depth is the ratio of the planet's area compared to the star's area</p>

<p>However at the relevant frequency, we also have to include the height of the atmosphere when considering the area.</p>\[ \delta_{R_P + H_\text{atm}} = \frac{\pi (R_P+H_\text{atm})^2}{\pi R_S^2} = \frac{R_P^2 + 2H_\text{atm} R_P +H_\text{atm}^2}{R_S^2} \] \[ \downarrow \] \[ \delta_{R_P + H_\text{atm}} = \delta_{R_P} + \frac{2H_\text{atm} R_P +H_\text{atm}^2}{R_S^2}\]

As much as we do need to consider the height of the atmosphere, it's *pretty* bloddy small compared to the radius of the planet, and especially when compared to the radius of the sun. As a result, that \\(\frac{H_\text{atm}^2}{R_S^2}\\) term is so close to zero, that it might as well be zero. 

With that in mind, we get a pretty good approximation for how much the atmosphere contributes to the transit depth:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ \delta_{atm} = \frac{2H_\text{atm}R_P}{R_S^2} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 3: Transit depth due to the atmosphere
        </div><div class="formula-tooltip-desc">
            If a planet's atmosphere is big enough, it will also contribute to the dip in light when the planet goes in front of the star. You can derive this formula just by taking the transit formula, replacing \(R_P\) with \( R_P + H_\text{atm} \) and simplifying.
        </div></span>
    </div>
</div>

This shows pretty much exactly what you'd expect, i.e. that very tall atmospheres are easier to detect than very small atmospheres.

#### Emission Spectroscopy

Instead of looking at absorbed starlight, we can look at light the planet itself emits when you shine the star's light on it. 

There is a slight problem: ideally we'd want to know the maximum amount of light the planet reflects, but that would be when the planet is behind the star, meaning we wouldn't be able to see it. So we'll just go with the next best thing: measure the planet's flux *just* before it passes behing the star.

The planetary flux relative to the star is:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ \frac{F_P}{F_S} \approx \frac{R_P^2 B(T_P)}{R_S^2 B(T_S)} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 4: Relative flux
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

Since the planet is cooler, it emits mostly in the **infrared**, which also conveniently reduces contamination from the star. We still need fairly hot, large planets to pull this off though.

#### Scale Height

This one's pretty cool, and left to me alone I'd give it its own full section.

Who am I kidding, it *is* left to me alone, so I'll do just that! Hold on a sec...

### Scale Height

We want to know how the pressure in an atmosphere changes as you get higher. We'll start with these two formulae:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ \frac{dP}{dz} = -\rho g, \qquad P = \frac{\rho k_B T}{\mu} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
        Formula 5: Hydrostatic equilibrium <br>X Ideal Gas Law
        </div><div class="formula-tooltip-desc">
        ...
        </div></span>
    </div>
</div>

The equation on the right is a reskin of the formula we all know and love, the ideal gas equation. We are of course assuming the air in a planet's atmosphere behaves like an ideal gas, which can be debated but whatevs, it gives us something to work with. 

This equation on the left is the newer one, and might seem like a bit of an arse-pull. It's a pretty common one which we can use by assuming a system is in *hydrostatic equilibrium*, meaning the force of gravity pushing the air down is the same as the force from the pressure pushing upwards. You can derive it if you want, but for now you'll have to take my word for it, k?

Anyway, now that we have these two equations, we can plug the ideal gas equation into the hydrostatic equilibrium equation, and then integrate to get the pressure. We'll have to assume that the temperature is constant, which is a bit optimistic but it'll do for now:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ P = P_0 \exp\left(-\frac{z}{h_{atm}}\right), \qquad h_{atm} = \frac{k_B T}{\mu g} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 6: Scale height
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

"Hey, I think you forgot to capitalise the \\(H\\) in \\(H_{atm}\\)" erm, no I didn't? Believe it or not I *do* know what I'm doing mate. This \\(h_{atm}\\) isn't the height of the atmosphere. The little \\(h\\) is a new quantity, called the **scale height**. This is the altitude over which pressure drops by a factor of \\(e\\) (meaning it's about 37% of the pressure at the surface). The total atmosphere height is roughly \\(H_{atm} \approx 5–10\\, h_{atm}\\), after which it gets too thin to absorb anything.

### TL;DR

Using these methods, we have confirmed over 6,100 contestants, whith many more applications waiting to be processed. Having said that, the universe is pretty big, so there could be millions or even billions more contestants, and we'll never know.

<div class="container">
    <!-- DIVIDING LINE -->
    <div class="image">
        <div class="image-floater">
            <div class="image-box left-box">
                <img src="images/Astronomy/Planets found.png" class="pop-image" style="max-width: 100%; width: 100vw"/>
            </div>
            <span class="image-tooltip left-box" style="left:100%;"> <div class="image-tooltip-title">
                Figure 2: Exoplanets
            </div><div class="image-tooltip-desc">
                ...
            </div></span>
        </div>
    </div>
    <!-- DIVIDING LINE -->
    <div class="text">
        <p> 
            In fact, look at this image. There are only planets within certain areas of the graph, which might tempt you to think that planets only form under those conditions. But no: all it means is that these are the planets which are easiest to detect. The planets found with imaging tend to be bigger and slower, because those are easiest to point a telescope at.
        </p>
    </div>
    <!-- DIVIDING LINE -->
</div>

Having said that, that isn't my problem. If you won't make it easy for us to detect your application, then you simply don't get to join the competition. So which planet is the prettiest? Earth, because I said so. Thanks for coming!

- Exoplanets are planets which orbit other stars, and there are different methods of finding them
- **Direct imaging**: Just look at them, which is difficult since they aren't very bright or easy to resolve. We can mitigate this by looking at young, hot, far-out planets.
- **Radial velocity**: The star wobbles due to the orbiting planet (like the binary stars we mentioned before), causing a doppler shift in the energy we receive, allowing us to detect the planet.
- **Astrometry**: The star wobbles, but it wobbles enough that we can actually just look at it.
- **Transit**: The planet blocks starlight, causing the brightness to dip, and the planet is detected.
- **Microlensing**: The planet distorts background starlight, causing an extra blip in brightness.
- Transit/emission spectroscopy lets us probe atmospheres
- **Scale height** is the height at which the pressure drops to 37% of its original pressure: \\[ h_{atm} = \frac{k_BT}{\mu g} \\]

And remember: Jupiter-flavoured planets are the best planets (also, thirteen).