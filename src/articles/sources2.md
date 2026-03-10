---
subid: sources2
topic: quantum2
title: Synthetic Particle Sources
---

Natural sources are great and all, but they have a slight problem. Namely, they don't always give us what we want. So sometimes, we have to take our own initiative and make our own. And this is expensive, and takes up a lot of space. Is it worth it? Maybe...

This is usually done using devices known as *particle accelerators*, which are nifty machines which can use electric fields to accelerate electrons to very high energies, before having them crash into other electrons.

### Linear Accelerators

First up, the OG particle accelerator, the *linear accelerator* (or *linac* if you'd like).

*"Can it be? There's a card in rush duels, which looks exactly like me!"*

Linacs are quite simple conceptually: they are basically just long ass tubes with a bunch of radiofrequency cavities which apply an electric field to the particles, which keeps on making the particle faster, and faster, and faster.

The benefits of linacs is that building 'em is a piece of piss. I mean it's literally a big tube, that's about as simple as one can get as far as building is concerned. Problem is, the faster we want to accelerate them, the longer the tube has to be. And linacs can get *pretty bloody long*. This ain't a bit deal if we just wanna accelerate an electron to a moderately high energy (like under a hundred gigaelectron volts), but trying to use these to observe energies of the order of teraelectron volts will be a bit of an issue.

This is especially problematic since, due to *relativity*, once we get to high enough speeds, time itself slows the particle down. That means that the particles isn't actually accelerating as much, meaning you don't get as much energy back given the amount of work you are doing to speed it up. Since the return on investment is quite rubbish at higher speeds, linacs can't really be used here.

### Cyclotrons

For my fellow AQA folk, you actually did this at A-level, but I bet you've forgotten about them by now, so let me remind you!

A cyclotron is more or less a linac, just now it's round. The cyclotron is made up of two semi-circular thingies, which scientists very creatively called 'Dees' (because the letter D looks like a semi-circle...). The particle begins near the centre of the system and is shot into one of the Dees.

We need this particle to accelerate in a circular way instead of in a straight line. Now let's turn our grey matter on: what physical phenomenon do we know of that causes a charged particle to undergo circular motion?

That's right, *magnetic fields*!

Remember from Electricity and Magnetism, specifically the section on [Magnetic fields and forces](http://127.0.0.1:5500/subtopic.html?subid=magnetic-fields&topic=e-m&year=1), we learnt that the Larmor radius ... 

<p>The proper derivation can be seen if you hit the link, but for now, just take the Lorentz force, assume there is no electric field (\(E=0\)), and then equate Lorentz force with centripetal force from circular motion, and you get:</p>\[ F = qvB = \frac{mv^2}r \] \[ \downarrow \]\[ r = \frac{mv}{qB} = \frac{p}{qB} \]

If we switch the units from SI units to something more appropriate for particle physics (like GeV/c), and recall that charge is quantised (\\(q=Ze)\\), then we get this equation for the radius in a cyclotron:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ r = \frac{p}{0.3ZB} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Radius in a cyclotron
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>


Erm, where were we? Oh yes, the particle is shot into one of the Dees. Then thanks to the magnetic field, it loops around with the radius we just defined until it exits the Dee again. At this point, the magnetic field is switched off to stop it from spinning, and an electric field is switched on to accelerate it across the gap. Then it enters the other Dee, at which point the electric field is switched back off and magnetic field is switched back on. 

This causes the particle to spiral around again, and since it was sped up by the electric field, it does so with a higher momentum, meaning that by way of Formula 1, it does so with a higher radius. Then it exits the Dee, at which point the magnetic field is switched off and an electric field is switched on to speed it up even more, meaning it has an even bigger radius when it goes into the next Dee.

The particle keeps on going around and around with larger and larger speeds and larger and larger radii, gaining more and more energy. Eventually, the radius is large enough that it can leave the cyclotron and be used for whatever the bloody hell we wanna use it for (probably smash it against another cyclotron-ified particle).

And I know what your thinking, "hold on, how the hell does the electric field know which way to accelerate the particle? After all, it accelerates it to the left at one moment and to the right at another moment?"

Well I mean, it doesn't *know* anything (electric fields aren't sentient y'know...), we'll obviously have to switch it ourselves, won't we? Everytime the particle is about to enter the gap, the field has to be switched to point in another direction. Which begs the question, how on earth are we supposed to press a button that bloody quickly?

Answer, *we* aren't pressing anything. If you remember from the Electricity and Magnetism section (again), there is such a thing as *Alternating Current*, or *AC*, which is just sine-wavy electricity. Since AC automatically switches from positive to negative, all we need to do is adjust the frequency of the current so that it wiggles in time with the particle switching sides.

<p>The time a particle spends spiralling is simply the distance travelled in the Dee divided by the velocity, \(v\). Since a Dee is just half a circle, the distance travelled inside the Dee is just half the radius of a circle, \( \pi r \). So that means the time spent in a single Dee is</p>\[ t = \frac{\pi r}v = \frac{\pi}v \frac{mv}{qB} \]\[ \downarrow \]

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ t = \frac{\pi m}{qB} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 2
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

Based on that, you might be tempted to think that the frequency is just 1 over \\( t \\) here. And guess what? You're wrong! 1 over \\( t \\) would give you the rate of a *full* cycle. But we only want the positive/negative part per Dee, which is half a cycle. Therefore to get the *cyclotron frequency*, we must halve this frequency (1 over \\( 2t \\)), which gives us:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ f_\text{cyclotron} = \frac1{2T} = \frac{qB}{2\pi m} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 3: Cyclotron Frequency
        </div><div class="formula-tooltip-desc">
        ...
        </div></span>
    </div>
</div>

<p>Oh and, er, if you really want, you can calculate the kinetic energy of the particle as it leaves the cyclotron. By rearranging our formula for the cyclotron radius and rearranging for velocity, we get</p>\[v=\frac{qBr}m\]

Then to get the kinetic energy, all we need to do is plug this velocity into \\( E_K = \\frac12 mv^2 \\) and then we get:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ E_K = \frac{q^2B^2r^2}{2m} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 3: Kinetic Energy
        </div><div class="formula-tooltip-desc">
        ...
        </div></span>
    </div>
</div>

Cyclotrons are much more compact than linacs, and are also pretty easy to make. Although like the linac, we can't have very high energies because *relativity is a wanker*. If you reeeeally want to **rev it up**, you'll need a *synchrotron*.

### Synchrotron

*Synchrotrons* take the logic of cyclotrons and flip it on its head. Instead of having a changing radius with a constant magnetic field like a cyclotron, synchrotrons keep a constant radius with a varying magnetic field. 

Synchrotrons are made up of a circular pipe with some small electromagnets to guide the beam. As the particle gets faster and faster, the magnetic field strength has to get stronger to keep the particles on the racetrack.

And whilst this allows us to get particles with a LOT of energy, *relativity is still a wanker*, although credit where credit is due, it's a wanker in a slightly more interesting way this time. When a particle is accelerating that bloody fast, it starts radiating photons. How this works doesn't matter. What does matter is that it has a fun German name, *bremsstrahlung*! It probably has some crazy authentic German pronunciation, but my best guess is to just go with *brem'-strar-lung*.

<p>Bremsstrahlung radiation (or <em>braking radiation</em> if you really can't be arsed) causes the particle to loose energy:</p>\[ \Delta E = \frac{e^2E^4}{3\varepsilon_0(m_0c^2)^4R} \]

I *sincerely* hope you don't have to memorise this formula (or even use it in fact), which is why I haven't used the orange box animation thing I do for important formulae. If it comes to your exam it you *are* required to memorise it, then if I were you I'd just log out of life at that point.

Whilst you don't have to memorise the exact formula, you should be able to determine what the formula tells us about bremsstrahlung radiation.

1. ***The energy lost is inversely proportional to the radius***. That means in principle, an infinite radius would mean no bremsstrahlung. And you might think "oh well there's no way we can do that," well turns out you can... because it's literally just a linac all over again.
2. ***The energy lost is inversely proportional to the mass***. That means larger particles loose less energy than lighter particles. If you do the maths, that means that electrons loose about 16 *TRILLION* times the amount of energy protons do. So while proton machines aren't really affected by bremsstrahlung, good luck trying to get an energy above a few GeV with electrons.





