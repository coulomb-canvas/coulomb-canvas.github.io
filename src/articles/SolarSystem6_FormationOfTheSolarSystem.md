---
subid: solar-formation
title: Formation of the Solar System
topics: solar
---

### Nebula Hypothesis

The nebula hypothesis states that everything formed from the gravitational collapse of gas in a molecular cloud. Conservation of angular momentum then turned the collapsing cloud into a protoplanetary disks around the young sun. This explains why planets all orbit in the ecliptic plane and aligned with the spin of the sun.

We can estimate the minimum mass solar nebula by spreading out the planets' material into rings (like jam), and increasing their mass by the amount they probably lost due to the sun eating it. A common thing to use is:

<div class=eqn> \[ \Sigma(r) \propto r^{-\frac32} \] </div>

...which is just saying that the density of the disc gets lower the further away from the sun you get. Assuming gravitational potential energy is radiated locally in the disc, the temperature scales like this:

<div class=eqn> \[ T_\text{disk} \propto r^{-\frac34} \] </div>

This results in an increase in solid material beyond a certain point called *the snowline*, which is the boundary between the terrestrial and the giant planets. 

Protoplanetary disks are observed around young stars, with lifetimes of about 10 million years

### Planet formation by core-accretion

1. Formation of the young sun and the protoplanetary disk by gravitational collapse
2. Sub-micron dust particles condense
3. Growth of particles by pair-wise collisions, up to about 10km sized objects (*planetesimals*)

This third step is initially assisted by electrostatic forces, and icy particles stick together very readily (so they grow more rapidly beyond the snowline). But there are 2 main problems. One, as they get larger, they become fragile and can be eroded by higher velocity collisions. Two, *gas drag* on particles in the disk causes larger particles to spiral into the sun.


#### Gas Drag

Consider the orbit within a gas disc. It's partially supported by its negative pressure gradient (getting smaller as you go outwards)

<div class=eqn> \[ \underbrace{\frac{v^2}{r} = \frac{GM_\odot m}{r^2}}_{\text{Keplarian Orbit}} \qquad + \overbrace{\frac{dP}{dr} \frac1{\rho}}^{\text{Addition support against \\ gravity, experienced by \\ the gas acting as a fluid}} \] </div>

The pressure term reduces the speed that the particles actually need to go by a teeny tiny amount. At 1 Astronomical Unit:

<div class=eqn> \[ v_\text{gas} \approx 0.995 v_\text{Kep} \] </div>

Solid objects however don't want to go slow. They wanna go at the normal \\( v_\text{Kep} \\) speed. Because of this, that \\( v_\text{Kep} - v_\text{gas} \\) difference is velocity feels like a kind of wind (called *headwind*) pushing them back at about \\( 100 \text{ ms}^{-1} \\) at 1AU, leading to significant drag force on solids in the disk:

<div class=eqn> \[ F_D = \frac12 C_D πR_P^2 \rho_{\text{gas}} (v_\text{Kep} - v_\text{gas})^2 \] </div>

Characteristic timescale to modify the orbit:

<div class=eqn> \[ \tau_D \sim \frac{m_p v_\text{Kep}}{F_D} \] </div>

Change mass for density:

<div class=eqn> \[ \begin{align} \tau_D 
    &\sim \frac83 \frac1{C_D} \frac{\rho_p}{\rho_\text{gas}} \frac{R_p v_\text{Kep}}{(v_\text{gas} - 0.995 v_\text{Kep})^2} \\[6pt]
    &= \frac83 \frac1{C_D} \frac{\rho_p}{\rho_\text{gas}} \frac1{0.005^2} \frac{R_p}{(v_\text{Kep})^2} \\[6pt]
    \end{align} \] </div>

For a planet, \\( \tau_D \sim 10^8 \text{ yr} \\)
For dust, \\( \tau_D \sim \text{seconds} \\)
For a 1m object, \\( \tau_D \sim 10^3 \text{ yr} \\). This is a significant problem.

However, the vertical component will cause the settling of particles into the disc mid plane, which is good for collision and growth, although there will be a gradual in-spiraling towards the proto-star (removing particles from the disc)

Possible solutions:

- Particles always drift against the pressure gradient, and can be trapped at pressure maxima in the gas disc, promoting collisions and rapid growth.
- Streaming instability where particles shield each other from the headwind, causes clumping and also promoting collisions and growth. Also promotes low velocity collisions and minimal erosion of particles

4. Further growth from planetesimals to protoplanets thanks to developing self-gravity, about a tenth of the mass of the earth, assisted by mutual gravity. This stops at the isolation mass, when the Hill sphere of the protoplanet has hoovered up a ring of the disk of solid particles.
5. More massive cores beyond the snowline, where ices can form (remember \\( \sigma(r) \propto r^{-\frac32} \\)).

Consider the change in mass. The volume is \\( 2πr \ dr \\), so

<div class=eqn> \[ dm \propto r^{-\frac32} 2πr \ dr \propto r^{-\frac12} \ dr \] </div>

The spacing of the planets increases roughly proportional with distance from the sun.

<div class=eqn> \[ M_\text{core} \propto r^{\frac12} \] </div>

For Jupiter

<div class=eqn> \[ M_\text{core}(5AU) \approx M_\text{core}(1AU) \times 5^\frac12 \times 4 \approx 9M_E \] </div>

Massive cores form rapidly beyond snowline as they are capable of accreting mass

6. Massive cores accrete gas from disc, gas fills the Hill Sphere, heated as it falls into the gravitational potential of the planet, must radiate the energy to cool, contract and settle on the planet. This is initially slow because diffuse gas cools inefficiently (cooling \\( \propto \rho \\)). Gas accretion rate increases as the mass of the gas increases, meaning the gas is compressed and so cooles more efficiently

This eventually becomes a runaway process, that rapidly accretes all gas in the disc annulus, creating a gas giant. The timescale of this is similar to the disc lifetime. If the disc is dispersed during the slow gas accretion phase, we get an ice giant instead.

Gas accretion is halted by X-ray photo evapouration of the disk by the young sun.

Remember, for a planet atmosphere, \\( \frac32 k_BT \approx \frac12 m_p \bar{v}^2 \\)

consider escape velocity of the sun

<div class=eqn> \[ v_\text{escape} = \sqrt{\frac{2GM_\odot}{r}} \] </div>

That will give a characteristic radius

<div class=eqn> \[ r = \frac{2GM_\odot m_p}{3k_BT} \approx 10 \ AU \] </div>

Beyond this radius, we see photoevaporation of the outer disk, shutting of supply of gas to inner disk

7. Terrestrial planets assembled by giant collisions between protoplanets after the disc has dispersed. Gravitational perturbations of orbits causes eccentricity to increase, causing crossing orbits and collisions. Previously, the orbits are circularised by gas drags within the disc

- Presence and composition of earth's moon (same as earth's mantle, suggesting the moon infact came from Earth's mantle)
- High density of Mercury (missing mantle material, lost in a collision)
- Spin obliquity of Uranus (Likely due to a large impact)

Radioisotope dating of moonrocks and meteorites tells us the solar system is 4.6Gyrs old, and the moon forms 4.5Gyrs old, evidence that the assembly of the terrestrial planets took about \\( 10^8 \\) years (life time of the gas disk is about 10^7 years old).

collocity