---
subid: fluxes
topic: astro
title: Fluxes and Magnitudes
---

Long ago and far away, in a land full of fairies and elves and mermaids 'n stuff (i.e. Ancient Greece), there was a guy from the land of Nicaea by the name of Hipparchus. He was looking at the sky one day and thought "You know what'd be really cool? If I were to have a list of every star and how bright it was!" And so he decided to do just that.

*For my fellow Christ lovers out there, this is the same Nicaea that the infamous Council of Nicaea took place at. According to legend, after the council was done, St. Nicholas smacked Arius in the face. Imagine being that much of a heretic that you end up getting banged in the face by bloody Santa Claus?*

He labelled each star with its own *magnitude*, which basically means how bright the star is. The very bright stars he gave a magnitude of 1, the faintest star has a magnitude of 6, and everything else is somewhere in the middle.

Now we being the intelligent people we are can likely see a few issues with this system already. For one, why do **brighter** stars have a **lower** number? I assume it's supposed to be like a ranking kinda thing, so to imply that the brightest star is in first place, but then that leads us to our next issue... why 6? Why not like 10, or 100, or like a round number, ykwim?

And finally... how the bloody 'ell is some random bellend from Greece supposed to give a meaningful value for each star? It's bloody subjective innit? And how do you know that the star you see is ACTUALLY bright and not just really close?

So as we can see, this is a pretty wank system we've got here. And scientists being scientist, instead of just creating a completely new system which doesn't have all these problems... based their new system AROUND Hipparcus' model? Like he's dead y'know, I doubt he'd take too much offence from you ditching his system.

But anyway, we now have to learn to use his stupid system to do modern physics.

### Flux

Before we do, we need to welcome in a new character.

*Luminosity*, \\( L \\), describes the amount of energy an object emits per unit time (the *power*). As cool a quantity this is to be able to measure, it's actually not always all that useful. After all, not all of that energy is gonna actually reach us.

<p>Take the sun for example. It has a luminosity</p>\[ L_\odot \approx 3.8 \times 10^{26} \]

So every second, the sun is delivering \\( 3.8 \\times 10^{26} \\) Joules of straight energy. Per SECOND? Do you know how bloody much that is?! We'd die if we were being hit with that much energy!

Now I'm assuming that, since you are still reading this, there is a decent chance that you are still alive, despite the sun's absolute mammoth luminosity. So then why is that?

The answer is extremely simple. For one, the sun is a sphere, meaning it's sharing its energy across it's entire surface. And since the sun is a thicc boi, that means only a small fraction of the sun's energy is being aimed towards us.

The second reason, the sun is a long long way away. So most of it's energy doesn't actually reach us.

As a result, we can define a much more relevant quantity, the *flux* \\(f\\), which measures how much energy actually reaches us per unit area. If we are a distance \\(d\\) away from an object, the flux from that object is:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ f = \frac{L}{4\pi d^2} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Flux
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

Pay attention to the formula and you'll notice that it's just the object's luminosity \\(L\\), divided by the surface area of a sphere with a radius of \\( d \\). If we now consider the sun's energy output in terms of the *flux*, with \\(L_\\odot \\) and the distance from Earth to the sun (1 astronomical unit, which is about \\( 1.5\\times10^{11}\\) metres), it turns out the flux of the sun is only about \\( 1350 \\text{Wm}^{-2} \\). That's *waaaaay* more manageable, especially with our atmosphere eating away at half of it.

### Magnitudes

Now back to the stupid ahh brightness system. Basically the aim of the game is to try and upgrade the system from 'because this Greek pillock said so' to 'there is some actually some actual real correlation with reality.'

For that we need to consider 2 flavours of magnitude: *apparent* and *absolute* magnitude.

#### Apparent Magnitude

*Apparent magnitude* describes how bright a star *appears* to our fallible human eyes. Since flux measures the amount of energy from a body that actually reaches us, and that kinda sorta relates to brightness 

In 1850, in another land full of fairies and mermaids (i.e. England), Norman Pogson suggested that we make the scale logarithmic, such that increasing the magnitude by 5 would mean the actual flux increased by 100. 

So let's say we have two stars with magnitudes \\(m_1\\) and \\(m_2\\) and with fluxed \\(f_1\\) and \\(f_2\\). Using those assumptions and some techy mathematics, we can get the difference between the two magnitudes:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ m_2 - m_1 = -2.5\log{\frac{f_2}{f_1}} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
        Formula X
        </div><div class="formula-tooltip-desc">
        ...
        </div></span>
    </div>
</div>

<p>Remember how I mentioned that Hipparcus decided to pull some stupidity by giving brighter stars lower numbers? Turns out there was some logic to it. We know what the <em>brightest</em> star in the night sky is (excluding the sun of course), it's a star called <em>Vega</em>. Since it is the brightest star, we can make it's magnitude as low as possible, zero. If \( m_\text{Vega} = 0 \), then that formula up their can morph into a new form:<p>

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ m = -2.5\log{\frac{f_2}{f_\text{Vega}}} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula X
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

Since we know the flux of Vega, this can serve as an easier way to determine the apparent magnitude of a star.

#### Absolute Magnitude

So let's take a look, we now have... a list of how bright stars look to us. Fat load o' good that is, beyonds being able to make our pretty little star catalogue, apparent magnitudes don't really tell us anything of value. Most notably, we don't know WHY the star looks brighter or dimmer. Is it actually emitting more or less energy? Or is it just very close or very far away?

And on that note... how DO we determine how close or how far away a star is?

In comes the *absolute magnitude* which tells us how bright the star would look if it were only 10 parsecs away. With that definition in mind, we can use the formula for flux from way earlier and the formula for apparent magnitude to get the apparent magnitude at 10 parsecs:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ m - M = 5\log{\frac{d}{10\text{ parsecs}}} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula X
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

### TL;DR

BTW, to anyone who doesn't believe what I was saying earlier about Ancient Greece having fairies and allat, I've personally been to Ancient Greece, and I saw them there. Dragons even. So what, are you gonna call me a liar? Based off what, have *you* been to Ancient Greece to verify that fairies and stuff *aren't* there? Didn't flipping think so. As the proverb says, "if the fish comes out of the water to tell you the crocodile is ill, believe it."

I don't care that I misinterpretted the proverb, and also commited a few logical fallacies. Point is there were fairies in Greece, and I won't have you saying otherwise. Anyway, what did we learn?

1. Hipparcus don't quite have it all there. Neither to modern scientists
2. Flux is the luminosity over the surface area
3. Apparent magnitude measures how bright something looks
4. We can measure apparent magniture relative to Vega
5. Absolute magnitude measures how bright something would appear if it were only 10 parsecs away


