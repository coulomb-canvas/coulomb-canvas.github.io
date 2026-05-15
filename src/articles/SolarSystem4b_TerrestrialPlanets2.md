---
subid: terrestrial2
title: The Terrestrial Planets (cont.)
topics: solar
---

### Atmospheres

#### Earth

1bar, mainly nitrogen (80%) and oxygen (20%). Temperature drops with amplitude, following an approximate adiabatic temperature profile (no heat exchange as gas rises or sinks) but with temperature inversions in the stratosphere (due to uv heating of the ozone layer) and the thermosphere (from X-ray heating)

#### Mercury

Mercury and the moon have surface gravity too low to retain a significant atmosphere

#### Mars

0.006 bar atmosphere, mainly carbon dioxide (95%) and nitrogen (3%). Large range of surface temperatures due to poor heat redistribution and weak greenhouse (seasons, day/night, )

#### Venus

93 bar, mainly carbon dioxide (96%) and nitrogen (4%).

#### Greenhouse effect

The atmosphere is transparent to the incoming heating of the sun, but more opaque to the outgoing infrared, due to molecular absorption.

With one opaque layer

<div class=eqn> \[ T_S^4 = 2T_P^4 \] </div>

With N layers

<div class=eqn> \[ T_S^4 = (1+N)T_P^4 \] </div>

Make it continuous:

<div class=eqn> \[ T_S^4 = (1+\frac34 \tau)T_P^4 \] </div>

SO \\( \tau = 1.33 \\) is one optic layer. For earth, \\( \tau_{IR} \approx 0.8 \\).


(In practice we need to consider the wavelength dependance)

Why do venus and earth has such different atmospheres? On earth, Co2 dissolves in water, produces acid rain, leading to the erosion of silicate rocks on land, which leads to calcium carbonate (limestone) being deposited as ocean sediments, which is 99.6% of earths carbon. This is a negative feedback loop in carbon-silicate cycle

CO2 goes up - T_S goes up - More ocean evapouration and rain - more erosion and deposition - CO2 goes down. CO2 is also returned to the atmosphere by volcanoes when the oscean plates are subducted.

There is also positive feedback, where an increase in co2 increases temp and water vapour in the atmosphere, which increases the temperature again. On earth, negative feedback wins. On venus, it looks like positive feedback won.

In fact, early venus may have been like the earth, but the extra heating may have lead to a runaway greenhouse effect, turning all water into vapour, meaning negative feedback shuts off, temperature shoots up (T_s about 1000K), causing a magma ocean. CO2 from volcanoes accumulates in the atmosphere.

Early earth probably had a thicker co2 atmosphere, helping it to avoid freezing when the sun was fainter (faint young sun paradox)

The total quantity of CO2 and nitrogen is quite similar for earth and venus, but venus is very deficient in water. Why?

Water is split by ultraviolet photolysis into hydrogen and oxygen, and the hydrogen evapourates into space. This is supported by the observed large excess of deuterium on venus, which is less vulnerable to evapouration than hydrogen

Atmospheric escape is when the upper end of the Maxwell-Boltzmann velocity distribution exceeds the escape velocity of the planet (called Jean's escape). Equipartition of energy in thermal equilibrium means lighter elements have higher velocity and more vulnerable to escape.

But escape is more efficient from solar x-ray heating of upper atmosphere

The escape rate is energy limited

<div class=eqn> \[ L_\text{in, X} = \frac{L_X πR_P^2}{4πa^2} \geq \frac{GM_p \dot{m}}{R} \] </div>

(limit because some energy could be lost, eg reradiated)

<div class=eqn> \[ \dot{m} \leq \frac{L_X R_P^3}{4GM_pa^2} \] </div>

For young venus, \\( \dot{m} \leq 5.7 \times 10^6 \text{ kg s}^{-1} \\). All water can be removed from venus in 10^6 years. Water on earth is protected from UV photolysis by the ozone layer and trapped lower in atmosphere as it condenses into clouds.

Escape is driven also by solar winds for planets without a global magnetic field

<div class=eqn> \[ \dot{m} = n_H m_H (4πr^2 \ v_\text{wind}) \] </div>

So kinetic energy flux at 1AU:

<div class=eqn> \[ \dot{m} = \frac12 n_H m_H v_\text{wind} v_\text{wind}^2 = 7\times 10^{-4} \] </div>

### Orbits

Generally, low eccentricity and inclination, the exception is mercury with e~0.2, due to secular resonances from perturbations from other planets

Advance of perturbation of mercury was the first test of general relativity

Earth and mars rotate quickly, Mercury and Venus rotate very slowly, due to tidal interactions with the sun, tides with the moon also slowing earths spin, which is seen in sea shell fossil record

The true rotation period is what we call the siderial day, while the solar day is slightly longer by about 4mins, due to orbital motion. It's much longer for slowly rotating planets. Venus has very slow, retrograde (wrong way) rotation, possibly due to retrograde circulation of thick atmosphere, due to solar heating

Mercury's rotation is kinda stuck with 3:2 resonance with its eccentric orbit (spins 1.5 times per orbit), small permanent deformation aligned with the sun at perihelion (when tidal torques are strongest, 1/a^6 remember?)

#### Spin obliquities

Mercury and venus have very small obliquities due to tidal synchronisation. Earth and Mars have about 23º, which causes seasons. THe spin axis processes due to the torque of the sun acting on the equitorial bulge.

The obliquity of Mars varies due to small torques from other planets, causing large climate variations. THe obliquity of Earth is stablised by the tidal torques from the moon. Nevertheless, small variations in obliquity (e and i) lead to Milankovsch cycles in Earth's climate.

#### Moons

Mercury and venus have no moons

Earth has a single large moon, believe to be formed by a giant collision

Mars has 2 small captured asteroids. Phobos orbits faster than mars rotates (0.3 days compared to 1 day), so tidal synchronisation is spinning up mars, causing the orbit of Phobos to decay. Phobos will eventually break apart when it fills its roche lobe

#### Roche Limit

A limit to orbital separation, where the self gravity of an object is smaller then the differential gravity from the planet. Remember

<div class=eqn> \[ dF = -\frac{2GMm}{r^3} \ dr \] </div>

<div class=eqn> \[ \frac{GM_mm}{R^2_m} \leq \frac{2GM_pm}{a^3} \] </div>

<div class=eqn> \[ a^3_r = 2\frac{M_p}{M_m} R_m^3 \] </div>

<div class=eqn> \[ \frac{M_p}{M_m} =  \frac{\frac43 π R_p^3 \rho_p}{\frac43 π R_m^3 \rho_m} \] </div>

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ a_R = 2^\frac13 \left( \frac{\rho_p}{\rho_m} \right)^\frac13 R_p \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
        Formula X
        </div><div class="formula-tooltip-desc">
        ...
        </div></span>
    </div>
</div>

This is for a rigid body that maintains its physical shape, which is unrealistic. For a fluid, the 2^1/3 becomes 2.456

Mercury and venus have relatively small hill spheres since they are so close to the sun, so moons can't have wide orbits. Also, since they rotate so slowly, any moons they have will likely rotate faster, causing them to spiral in like phobos. The moons will then be distrupted when they reach the Roche limit