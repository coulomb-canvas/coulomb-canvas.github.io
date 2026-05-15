---
subid: giant
title: Giant Planets
topics: solar
---

Now we are talking about the part time aura farmers

These gas giants are so big and have so much mass and so much aura, that the gravity of all the other bodies in the solar system is practically useless, meaning their eccentricity and inclinations are really small

Jupiter and Saturn are the gas giants, made up of mostly hydrogen and helium.

Neptune and Uranus have less gas. That likely means they have a higher proportion of common ices of volatile elements, like water, carbon dioxide and ammonia. For this reason they are called the *ice giants*, but don't let the name fool you: They aren't actually made up of ice, they are mostly hydrogen and helium, just like the gas giants. They get their name since they were likely formed from ice.

### Gas giants

You can calculate the radius vs mass for a given composition by assuming it follows hydrostatic equilibrium

<div class=eqn> \[ \frac{dP}{dr} = - \frac{GM_r \rho(r) }{r^2} \] </div>

We want to solve for \\( \rho(r) \\), meaning we need the equation of state for \\( P(\rho) \\). This EoS can be *pretty* tough to try and measure in a lab, but it turns out to be near enough

<div class=eqn> \[ P \approx k \rho^2, \ k=2.7\times10^5 \text{ Nm}^4\text{kg}^{-1} \] </div>

So we'll just stick with that. So then the left hand side becomes:

<div class=eqn> \[ \frac{dP}{dr} = 2k\rho \frac{\rho(r) }{dr} \] </div>

Now we can use our new and improved hydrostatic equilibrium equation. Once we do that, with some tactical re-arranging we end up with:

<div class=eqn> \[ r^2 \frac{d\rho(r) }{dr} = - \frac{G}{2k} M_r \] </div>

Now that's better, but there's still an annoying \\( M \\) in the way. But never fear! We can get rid of the M simply by differentiating again, and using the *mass conservation equation*

<div class=eqn> \[ dM_r = 4πr^2 \rho(r) \ dr \] </div>

In the end, you get this differential equation:

<div class=eqn> \[ \frac{d^2\rho(r) }{dr^2} + \frac2{r} \frac{d\rho(r) }{dr} + \left( \frac{2πG}{k} \right) \rho = 0 \] </div>

You probably don't need to actually solve this, but you should know that the solution of this is

<div class=eqn> \[ \rho(r) = \rho_c \frac{\sin{kr}}{kr}, \quad k = \sqrt{\frac{2πG}{k}} \] </div>

So then \\( \rho(R) = 0 \\) when \\( \sin{\sqrt{\frac{2πG}{k}}R} = 0 \\), so when \\( \sqrt{\frac{2πG}{k}}R = \pi \\). This should mean:

<div class=eqn> \[ R = \sqrt{\frac{πk}{2G}} \] </div>

This gives a radius of \\( R = 7.97 \times 10^7 \text{ m} \\), which is 1.12 times the actual value. Notice that it doesn't depend on mass: if you actually look at plots of mass against radius, it begins to go back down at around this value. If you think about it, if you add more and more gas to a gas planet, you are only giving it more gravity, meaning it will actually get smaller.

#### Central Density and Pressure

If we want to know the *central density* of the planet, \\( \rho_c \\), we just have to integrate the mass conservation equation.

<div class=eqn> \[ \begin{align} M 
    &= \int^R_0 4πr^2 \rho(r) \ dr \\[6pt]
    &= \int^R_0 4πr^2 \rho_c \frac{\sin{kr}}{kr} \ dr \\[6pt]
    &= \frac{4π\rho_c}{k} \int^R_0 r \sin{kr} \ dr 
\end{align} \] </div>

Evaluating the integral gives us:

<div class=eqn> \[ \rho_c = \frac{πM}{4R^3} \approx 4400 \text{ kg m}^{-3} \] </div>

Pretty bloody dense, denser than rocks even. Hydrogen, a gas (well, more like a liquid at this point, but you get what I mean) is denser than rock at the centre of Jupiter. Isn't that cool?

And even better, by using the equation of state we had earlier, we can proceed to calculate the pressure:

<div class=eqn> \[ P_c \approx k \rho_c^2 = 5 \times 10^{12} \text{ Pa} = 5\times 10^7 \text{ bar} \] </div>

By looking at a phase diagram of hydrogen at this pressure, we can see that it forms a liquid at this pressure. But not just any liquid. The pressure is so high that the electrons are now delocalised, meaning they can move freely and conduct electricity. What do we call a material which has electron which move freely and can carry charge?

A *metal*!

Believe it or not, hydrogen is actually considered a metal at this density. We call it a *metallic liquid*.

#### Structure of the Gas Giants

We'd expect a core made of rock or ice, with this liquid metal hydrogen layer. Then as you get a bit higher up, hydrogen transitions back into a regular, non-metal fluid (molecular fluid), before transitioning into the visible gas layer we all know and love.

Saturn should have the same layers, but with a smaller metal hydrogen layer. Both rotate pretty quickly (\\( P < 0.5 \text{ days} \\)), making them *oblate spheroids*, which slightly hacks up the spherical structure and the gravitationan potential poles internal structure (e.g. Juno mission)

Large‑scale banding and jets extend downwards, implying deep convection and zonal flows in the interior.

#### Magnetic fields

All the convection, rotation and conducting metal in the planet creates a strong magnetic dynamo and strong magnetic field. A *very* strong magnetic field. What's that, you don't believe me? Well that's rude! So you're saying I'm a liar?! When have I ever lied to you?

The magnetic moment of jupiter is *20 THOUSAND* times that of earth. 20 whole thousands! That's a lot of bloody thousands! Saturn ain't quite as strong since there is less of the metal hydrogen liquid stuff, but still, its magnetic moment is 600 times that of earth. *6* bloody hundreds? That's a lot of hundreds, isn't it?

These strong magnetic field form to *aurorae* (northern lights) at the poles, as well as radio emission through cyclotron and synchrotron emission by low/high energy electrons orbiting magnetic field lines.

We can estimate how big the magnetosphere of a planet by equating the magnetic energy density (\\( u_B \\)) with the kinetic energy density (\\( u_w \\)) of the solar wind. From the Electricity and Magnetism section, we know that the magnetic energy density is:

<div class=eqn> \[ u_B = \frac{B^2}{2\mu_0} \] </div>

For a magnetic dipole

<div class=eqn> \[ B(r) = \frac{\mu_0}{2π} \frac{\mu}{r^3} \] </div>

So then put that in and you get:

<div class=eqn> \[ u_B = \frac{\mu_0\mu}{8π^2r^6} \] </div>

Next, the kinetic energy density is just kinetic energy divided by volume. Or if you like, kinetic energy but replacing the mass with a density:

<div class=eqn> \[ u_w = \frac12 \rho_w v_w^2 \] </div>

So put 'em equal to each other, and rearrange for the radius, and you get this monstrosity:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ R_M = \left( \frac{\mu_0}{\rho_w} \right)^\frac16 \left( \frac{\mu}{2πv_w} \right)^\frac13 \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
        Formula X
        </div><div class="formula-tooltip-desc">
        ...
        </div></span>
    </div>
</div>

Why is this important? Well it tells us two key things about the magnetosphere;

1. \\( R_M \propto \mu^\frac13 \\). The stronger the dipole, the larger the magnetosphere
2. \\( R_M \propto \rho_w^{-\frac16} \\). The denser the wind, the smaller the magnetosphere
3. \\( R_M \propto v_w^{-\frac13} \\). The faster/stronger the wind, the smaller the magnetosphere

Can also scale between planets

<div class=eqn> \[ u_B \propto \left( \frac{\mu}{r^3} \right)^2 \quad u_w \propto \frac{1}{a^2} \] </div>

<div class=eqn> \[ \frac{\mu}{R_m^3} \propto \frac{1}{a}\] </div>

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ R_M \propto (\mu a)^\frac13 \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
        Formula X
        </div><div class="formula-tooltip-desc">
        ...
        </div></span>
    </div>
</div>

### Ice Giants

Mass is mostly "ices", which is things like water, methane, ammonia, stuff like that. Nevertheless, the actual volume of the planet is mostly hydrogen, giving it an intermediate density. This is supported by the large overabundance of methane in their atmospheres, which explains their blue colour, 'cus methane eats up red light.

The ice giants are both rapid rotaters. But Uranus is a bit of a weird one, since it has an obliquity of about 98º (it's on its side), probably due to a collision during its formation.

Uranus and Neptune aren't as powerful as Jupiter and Saturn, but they are still pretty tuff, with magnetic moments 50 and 25 times that of earth respectively. And you might wonder "how can this happen, since Uranus and Neptune ain't got enough pressure to form none of that metallic hydrogen liquid thing?" Well at extreme pressures, ice becomes ionised, so electricity can still flow, and dynamoes can still form. Cool innit?

They have complex corkscrew magnetospheres, due to the high obliquities (especially Uranus), but also misaligned (from the spin axis) and offset (from the centre of the planet) magnetic fields (possibly due to the dynamo only acting in a small convective zone)

### Internal Heating

Jupiter, Saturn and Neptune all have effective temperatures higher than the expected equilibrium temperature, meaning they are emitting more heat than they are receiving from the sun. For example, for Jupiter \\( T_p = 110K, \quad T_\text{eff} = 124K \\). This means there must be a source of internal heat.

In each case, there is not enough rocky material for the source to be radioactive decay, so that's off the table.

The first possible reasoning is *slow cooling*. In short, big planets cool down much more slowly. Therefore Jupiter is big enough that some of this heat could actually be left over from formation. That explains some of it, but not all of it.

The second possible reason is *helium rain*. Saturn (and maybe Jupiter who knows) are experiencing ongoing differenciation, releasing gravitational potential energy, from *rain-out of helium* from the envelope. This is supported by an underabundance of helium in the visible upper atmosphere.

Neptune has ongoing differentiation of metals, rocks and ices. Nobody really knows why this doesn't happen in Uranus, but it could be due to the lack of convection trapping heat in the interior

### Atmospheres

As I've said like a quadrillion times by now, the gad gians have atmospheres made up mostly of hydrogen and helium, and enriched with methane and ammonia. Water condenses deeper into the atmosphere than we can see

Jupiter has *bright zones* (reflective clouds of ammonium ice) and *dark belts* (seeing deeper into the atmosphere, lower albedo, with the red/brown colour coming from trace molecules from ultraviolet photochemistry). If we look in the infrared range, the banding pattern is reverses (the darker parts become briter and vice versa), since the high altitude clouds are cold and dark, and the cloud free parts are higher temperature since they are lower.

The clouds we are seeing in zones condense as warm material rises and cools in a convection pattern. Clouds evapourate in dark belts and sink, causing the temperature to rise

Rising and north south spreading in convection bands carries angular momentum and result in strong local over/under rotation, causing opposite east west winds

We see many storms at the shearing boundaries, the most famous storm being the giant red spot, which has been around for like 400 years

Saturn has a similar banding pattern, but less obvious (muted), becausr the clouds form deeper in the cooler atmosphere. Occasional storms bring the reflective ammonia clouds to higher amplitudes.

Neptune is cooler and the ammonia ice clouds are even deeper, meaning the banding is even more muted. The blue colour is from enhanced methane which strongly absorbs red light. There are also high altitude white clouds from methane condensing at these low temperatures

Uranus looks entirely featureless (to voyager 2 anyway). There is *some* banding, but you can barely see it. But nowadays we can see strong white clouds of methane visible (possibly seasonal variations, although P is about 84 years so we won't know for quite a while.)

### Moons

Jupiter has 4 large Galilean moons (and many smaller captured asteroids). The closer moons are denser, and the further out, the lower the density, with Callisto not being much more dence than ice, and volatile content increases. This is due to temperature gradients in the disk surrounding Jupiter when the moons formed. It may also be from tidal heating, which is evapourating volatiles (recall their resonant orbits, and tidal damping of eccentricity)

#### Jupiter

- **IO**: Io is rocky and highly volcanic, which means it has a younger surface, since there are no impact craters
- **EUROPA**: Europa also lacks impact craters (younger), and it has rocky composition with reflective water ice surface. It has a tidally heated subsurface ocean
- **GANYMEDE AND CALLISTO**: Their masses are dominated by ice, with an older, cratered surface. There are some cracks there, which implies it is geologically active (ice geology rather than rock). Probably sub-surface oceans of their own.

#### Saturn

- **TITAN**: Saturn has one large moon, Titan. Titan has a thick atmosphere, 1.5bar, mainly made of nitrogen. It also has a thick photochemical hydrocarbon haze. Radar imaging shows liquid methane rivers and lakes
- **ENCELADUS**: Saturn has 6 other spherical moons, including enceladus. This has a tidally heated liquid water ocean below the thin ice crust. 

#### Uranus

Uranus has 5 spherical moons, with similar composition and density trends as the galilean moons. The moons are also rotated about 98º, aligning with the blanets obliquity, which is taken as evidence that they formed from a disk of debris from the impact which tilted it.

#### Neptune

Neptune has 1 spherical moon, called Triton. It is the only massive moon which spins the wrong way (retrograde motion). This likely means this wasn't formed *in situ* (from the planet itself), but was a dwarf planet captured from the Kuiper belt, making it the largest captured moon. It likely destablised the primordial Neptune moon system.

### Rings

Saturn is the main example, with rings made of ice particle, with sized ranging from 1cm-1m. It has a complex structure, due to mean motion resonances with Saturn's moons. The rings are also extremely thin, due to collisions when any particles orbit out of this plane, implying they have disc crossing orbits

The main rings extend from about 1.2 - 2.3 x the radius of the planet. This is reflective of the Roche limit:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ a_R = 2.456 \left( \frac{\rho_p}{\rho_m} \right)^\frac13 R_p \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
        Formula X
        </div><div class="formula-tooltip-desc">
        ...
        </div></span>
    </div>
</div>

For Saturn, \\( \rho_p = 700 \text{ kg m}^{-1} \\). Assume \\( \rho_m = 1000 \text{ kg m}^{-1} \\), that gives us 

<div class=eqn> \[ a_R = 2.2 R_p \] </div>

Which matches nicely! So it was probably a tidally distrupted moon that migrated beyond its Roche limit. The lifetime of the rings is about 10^8 years, eroded by ring rain where photoionised material followed the magnetic field lines on Saturn

The dusty E-ring is associated with ejecta from Enceladus

All giant planets have dusty rings like saturn's
