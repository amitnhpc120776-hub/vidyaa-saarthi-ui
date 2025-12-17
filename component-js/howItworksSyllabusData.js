/* =====================================================
   1. MASTER SYLLABUS DATA
   -----------------------------------------------------
   Structure:
   Subject → Book → Chapter → topics { Topic : Text }
===================================================== */

const syllabusData = {
  Physics: {
    "Physics Part-I": {
      "Units and Measurement": {
        topics: {
          "The international system of units": `
          <p>
        In earlier times, scientists of different countries were using
        different systems of units for measurement.
        </p>

        <p>
        Three such systems were in use extensively:
        </p>

        <ul>
            <li><strong>CGS system</strong>: centimetre, gram, second</li>
            <li><strong>FPS (British) system</strong>: foot, pound, second</li>
            <li><strong>MKS system</strong>: metre, kilogram, second</li>
        </ul>

        <p>
            The internationally accepted system today is the
            <strong>Système Internationale d’Unités (SI)</strong>,
            developed by the Bureau International des Poids et Mesures (BIPM)
            and revised in 2018.......
                </p>`,
          "Significant figures": `
        <p>
    As discussed above, every measurement involves errors. Thus, the result of
    measurement should be reported in a way that indicates the precision of
    measurement.
  </p>

  <p>
    Normally, the reported result of measurement is a number that includes all
    digits in the number that are known reliably plus the first digit that is
    uncertain. These digits are known as significant digits or significant
    figures.
  </p>

  <p>
    For example, if the period of oscillation of a simple pendulum is reported as
    1.62 s, the digits 1 and 6 are reliable and certain, while the digit 2 is
    uncertain. Thus, the measured value has three significant figures.
  </p>

  <p>
    Similarly, a length reported as 287.5 cm has four significant figures. The
    digits 2, 8, and 7 are certain, while the digit 5 is uncertain. Clearly,
    reporting more digits than justified by the precision of measurement is
    misleading.
                </p>`,
        },
      },
      "Motion in a Straight Line": {
        topics: {
          "Instantaneous velocity and speed": `
<p>
The average velocity tells us how fast an object has been moving over a given
time interval, but it does not describe how fast the object moves at different
instants of time during that interval. To address this, we define the
<strong>instantaneous velocity</strong>, or simply <strong>velocity</strong>,
at a particular instant of time.
</p>

<p>
The instantaneous velocity <strong>v</strong> at an instant <strong>t</strong>
is defined as the limit of the average velocity as the time interval
<strong>Δt</strong> becomes infinitesimally small.
</p>

<p>
Mathematically,
</p>

<p>
v = lim<sub>Δt → 0</sub> (Δx / Δt) &nbsp;&nbsp; (2.1a)
</p>

<p>
In the language of calculus, this can be written as:
</p>

<p>
v = dx / dt &nbsp;&nbsp; (2.1b)
</p>

<p>
Here, the symbol <strong>lim<sub>Δt → 0</sub></strong> denotes the operation of
taking the limit as <strong>Δt</strong> approaches zero....
</p>`,
          "Kinematic equations": `
<p>
For uniformly accelerated motion, we can derive simple equations that relate
the displacement <strong>x</strong>, time taken <strong>t</strong>, initial
velocity <strong>v<sub>0</sub></strong>, final velocity <strong>v</strong>, and
acceleration <strong>a</strong>.
</p>

<p>
From the definition of uniform acceleration, the relation between final
velocity and initial velocity is given by:
</p>

<p>
v = v<sub>0</sub> + at &nbsp;&nbsp; (2.4)
</p>

<p>
This relation is graphically represented by the velocity–time (v–t) graph.
The area under the v–t curve between instants 0 and <strong>t</strong> represents
the displacement of the object.
</p>
<img
  src="../../../assets/illustration/HowItWorks/phy-motionInstraightLine-Kinematics.svg"
  alt="Velocity–time graph for uniformly accelerated motion"
  style="max-height: 144px; width: 100%; object-fit: contain;"
/>
<p>
The total area under the curve is equal to the sum of the area of a rectangle
and the area of a triangle.
</p>`,
        },
      },
    },

    "Physics Part-II": {
      "Mechanical Properties of Solids": {
        topics: {
          "Stress and strain": `<p>
                When forces are applied on a body in such a manner that the body remains in
                <strong>static equilibrium</strong>, it undergoes deformation. The extent of
                deformation may be small or large depending upon the nature of the material
                and the magnitude of the applied force.
                </p>

                <p>
                In many materials, this deformation may not be noticeable visually, but it
                does exist. Whenever a body is subjected to a deforming force, a
                <strong>restoring force</strong> is developed within the body.
                </p>

                <p>
                The restoring force is equal in magnitude but opposite in direction to the
                applied force. The restoring force per unit area of the material is known as
                <strong>stress</strong>.
                </p>

                <p>
                If <strong>F</strong> is the force applied normally to the cross-section and
                <strong>A</strong> is the area of cross-section of the body, then the magnitude
                of stress is given by:
                </p>

                <p>
                Stress = F / A &nbsp;&nbsp; (8.1)
                </p>

                <p>
                The SI unit of stress is <strong>N m<sup>–2</sup></strong>, which .....
                </p>`,
          " ELASTIC MODULI": `<p>
The proportional region within the elastic limit of the stress-strain curve
(region OA in Fig. 8.2) is of great importance for structural and manufacturing
engineering designs.
</p>

<p>
The ratio of stress and strain, called modulus of elasticity, is found to be a
characteristic of the material.
</p>

<p>
<strong>8.5.1 Young’s Modulus</strong>
</p>

<p>
Experimental observation show that for a given material, the magnitude of the
strain produced is same whether the stress is tensile or compressive.
</p>

<p>
The ratio of tensile (or compressive) stress (<strong>σ</strong>) to the
longitudinal strain (<strong>ε</strong>) is defined as Young’s modulus and is
denoted by the symbol <strong>Y</strong>.
</p>

<p>
Y = σ / ε
                </p>`,
        },
      },
      "Mechanical Properties of Fluids": {
        topics: {
          Pressure: `
        <p>
        A sharp needle when pressed against our skin pierces it. Our skin, however,
        remains intact when a blunt object with a wider contact area (say the back of a
        spoon) is pressed against it with the same force.
        </p>

        <p>
        If an elephant were to step on a man’s chest, his ribs would crack.
        </p>

        <p>
        A circus performer across whose chest a large, light but strong wooden plank is
        placed first, is saved from this accident.
        </p>

        <p>
        Such everyday experiences convince us that both the force and its coverage area
        are important.
        </p>

        <p>
        Smaller the area on which the force acts, greater is the impact.
        </p>

        <p>
        This impact is known as pressure.
        </p>
        `,
          "STREAMLINE FLOW": `
        <p>
        So far we have studied fluids at rest. The study of the fluids in motion is known
        as fluid dynamics.
        </p>

        <p>
        When a water tap is turned on slowly, the water flow is smooth initially, but
        loses its smoothness when the speed of the outflow is increased.
        </p>

        <p>
        In studying the motion of fluids, we focus our attention on what is happening to
        various fluid particles at a particular point in space at a particular time.
        </p>

        <p>
        The flow of the fluid is said to be steady if at any given point, the velocity
        of each passing fluid particle remains constant in time.
        </p>

        <p>
        This does not mean that the velocity at different points in space is same.
        </p>

        <p>
        The velocity of a particular particle may change as it moves from one point to
        another.
        </p>`,
        },
      },
    },
  },

  Chemistry: {
    "Chemistry Part-I": {
      "Some Basic Concepts of Chemistry": {
        topics: {
          "Laws of chemical combination": `<p>
The combination of elements to form compounds is governed by the following five
basic laws.
</p>

<p>
<strong>1.5.1 Law of Conservation of Mass</strong>
</p>

<p>
This law was put forth by Antoine Lavoisier in 1789.
</p>

<p>
He performed careful experimental studies for combustion reactions and reached
to the conclusion that in all physical and chemical changes, there is no net
change in mass during the process.
</p>

<p>
Hence, he reached to the conclusion that matter can neither be created nor
destroyed.
</p>

<p>
This is called <strong>Law of Conservation of Mass</strong>.
</p>`,
          "Mole concept": `<p>
<strong>Mole concept and Molar Masses</strong>
</p>

<p>
Atoms and molecules are extremely small in size and their numbers in even a
small amount of any substance is really very large.
</p>

<p>
To handle such large numbers, a unit of convenient magnitude is required.
</p>

<p>
Just as we denote one dozen for 12 items, score for 20 items, gross for 144
items, we use the idea of mole to count entities at the microscopic level
(i.e., atoms, molecules, particles, electrons, ions, etc).
</p>

<p>
In SI system, mole (symbol, mol) was introduced as seventh base quantity for
the amount of a substance.
</p>

<p>
The mole, symbol mol, is the SI unit of amount of substance.
</p>

<p>
One mole contains exactly 6.02214076 × 10<sup>23</sup> elementary entities.
</p>

<p>
This number is the fixed numerical value of the Avogadro constant,
<strong>N<sub>A</sub></strong>, when expressed in the unit
<strong>mol<sup>–1</sup></strong> and is called the Avogadro number.
</p>`,
        },
      },
      "Structure of Atom": {
        topics: {
          "Isobars and Isotopes": `
        <p>
        The composition of any atom can be represented by using the normal element
        symbol (<strong>X</strong>) with superscript on the left hand side as the atomic
        mass number (<strong>A</strong>) and subscript on the left hand side as the
        atomic number (<strong>Z</strong>) (i.e.,
        <sup>A</sup><sub>Z</sub>X).
        </p>

        <p>
        Isobars are the atoms with same mass number but different atomic number for
        example,
        <sup>14</sup><sub>6</sub>C and <sup>14</sup><sub>7</sub>N.
        </p>

        <p>
        On the other hand, atoms with identical atomic number but different atomic mass
        number are known as Isotopes.
        </p>

        <p>
        In other words (according to equation 2.4), it is evident that difference
        between the isotopes is due to the presence of different number of neutrons
        present in the nucleu.
        </p>
        `,
          "Planck’s Quantum Theory": `
            <p>
            Some of the experimental phenomenon such as diffraction* and interference**
            can be explained by the wave nature of the electromagnetic radiation.
            </p>

            <p>
            However, following are some of the observations which could not be explained
            with the help of even the electromagnetic theory of 19th century physics
            (known as classical physics):
            </p>

            <ul>
            <li>
                (i) the nature of emission of radiation from hot bodies (black-body radiation)
            </li>
            <li>
                (ii) ejection of electrons from metal surface when radiation strikes it
                (photoelectric effect)
            </li>
            <li>
                (iii) variation of heat capacity of solids as a function of temperature
            </li>
            <li>
                (iv) Line spectra of atoms with special reference to hydrogen.
            </li>
            </ul>

            <p>
            These phenomena indicate that the system can take energy only in discrete
            amounts.
            </p>
            `,
        },
      },
    },

    "Chemistry Part-II": {
      "Redox Reactions": {
        topics: {
          "OXIDATION AND REDUCTION REACTIONS": `<p>
Originally, the term oxidation was used to describe the addition of oxygen to an
element or a compound.
</p>

<p>
Because of the presence of dioxygen in the atmosphere (~20%), many elements
combine with it and this is the principal reason why they commonly occur on the
earth in the form of their oxides.
</p>

<p>
The following reactions represent oxidation processes according to the limited
definition of oxidation:
</p>

<p>
2 Mg (s) + O<sub>2</sub> (g) → 2 MgO (s) &nbsp;&nbsp; (7.1)
</p>

<p>
S (s) + O<sub>2</sub> (g) → SO<sub>2</sub> (g) &nbsp;&nbsp; (7.2)
</p>

<p>
In reactions (7.1) and (7.2), the elements magnesium and sulphur are oxidised on
account of addition of oxygen to them.
</p>

<p>
Similarly, methane is oxidised owing to the addition of oxygen to it.
            </p>`,
          "REDOX REACTIONS IN TERMS OF ELECTRON TRANSFER REACTIONS": `<p>
We have already learnt that the reactions
</p>

<p>
2Na (s) + Cl<sub>2</sub> (g) → 2NaCl (s) &nbsp;&nbsp; (7.12)
</p>

<p>
4Na (s) + O<sub>2</sub> (g) → 2Na<sub>2</sub>O (s) &nbsp;&nbsp; (7.13)
</p>

<p>
2Na (s) + S (s) → Na<sub>2</sub>S (s) &nbsp;&nbsp; (7.14)
</p>

<p>
are redox reactions because in each of these reactions sodium is oxidised due
to the addition of either oxygen or a more electronegative element to sodium.
</p>

<p>
Simultaneously, chlorine, oxygen and sulphur are reduced because to each of
these, the electropositive element sodium has been added.
</p>

<p>
From our knowledge of chemical bonding we also know that sodium chloride,
sodium oxide and sodium sulphide are ionic compounds and are perhaps better
written as:
</p>

<p>
Na<sup>+</sup>Cl<sup>–</sup> (s),
(Na<sup>+</sup>)<sub>2</sub>O<sup>2–</sup> (s),
and (Na<sup>+</sup>)<sub>2</sub>S<sup>2–</sup> (s)
            </p>`,
        },
      },
      Hydrocarbons: {
        topics: {
          Alkanes: `
            <p>
            As already mentioned, alkanes are saturated open chain hydrocarbons containing
            carbon–carbon single bonds.
            </p>

            <p>
            Methane (CH<sub>4</sub>) is the first member of this family.
            </p>

            <p>
            Methane is a gas found in coal mines and marshy places.
            </p>

            <p>
            If you replace one hydrogen atom of methane by carbon and join the required
            number of hydrogens to satisfy the tetravalence of the other carbon atom, what
            do you get?
            </p>

            <p>
            You get C<sub>2</sub>H<sub>6</sub>.
            </p>

            <p>
            This hydrocarbon with molecular formula C<sub>2</sub>H<sub>6</sub> is known as
            ethane.
            </p>

            <p>
            Thus you can consider C<sub>2</sub>H<sub>6</sub> as derived from CH<sub>4</sub>
            by replacing one hydrogen atom by –CH<sub>3</sub> group.
            </p>

            <p>
            Go on constructing alkanes by doing this theoretical exercise i.e., replacing
            hydrogen atom by –CH<sub>3</sub> group.
            </p>

            <p>
            The next molecules will be C<sub>3</sub>H<sub>8</sub>, C<sub>4</sub>H<sub>10</sub> …
            </p>
            `,
          Alkenes: `
            <p>
            Alkenes are unsaturated hydrocarbons containing at least one double bond.
            </p>

            <p>
            What should be the general formula of alkenes?
            </p>

            <p>
            If there is one double bond between two carbon atoms in alkenes, they must
            possess two hydrogen atoms less than alkanes.
            </p>

            <p>
            Hence, general formula for alkenes is C<sub>n</sub>H<sub>2n</sub>.
            </p>

            <p>
            Alkenes are also known as olefins (oil forming) since the first member, ethylene
            or ethene (C<sub>2</sub>H<sub>4</sub>) was found to form an oily liquid on
            reaction with chlorine.
            </p>
            `,
        },
      },
    },
  },

  Biology: {
    Biology: {
      "Plant Kingdom": {
        topics: {
          Algae: `
            <p>
            Algae are chlorophyll-bearing, simple, thalloid, autotrophic and largely
            aquatic (both fresh water and marine) organisms.
            </p>

            <p>
            They occur in a variety of other habitats: moist stones, soils and wood.
            </p>

            <p>
            Some of them also occur in association with fungi (lichen) and animals
            (e.g., on sloth bear).
            </p>

            <p>
            The form and size of algae is highly variable, ranging from colonial forms
            like Volvox and the filamentous forms like Ulothrix and Spirogyra (Figure 3.1).
            </p>

            <p>
            A few of the marine forms such as kelps, form massive plant bodies.
            </p>

            <p>
            The algae reproduce by vegetative, asexual and sexual methods.
            </p>

            <p>
            Vegetative reproduction is by fragmentation. Each fragment develops into a
            thallus.
            </p>

            <p>
            Asexual reproduction is by the production of different types of spores, the
            most common being the zoospores.
            </p>
            `,
          Bryophytes: `
            <p>
            Bryophytes include the various mosses and liverworts that are found commonly
            growing in moist shaded areas in the hills.
            </p>

            <p>
            Bryophytes are also called amphibians of the plant kingdom because these
            plants can live in soil but are dependent on water for sexual reproduction.
            </p>

            <p>
            They usually occur in damp, humid and shaded localities.
            </p>

            <p>
            They play an important role in plant succession on bare rocks/soil.
            </p>

            <p>
            The plant body of bryophytes is more differentiated than that of algae.
            </p>

            <p>
            It is thallus-like and prostrate or erect, and attached to the substratum by
            unicellular or multicellular rhizoids.
            </p>

            <p>
            They lack true roots, stem or leaves.
            </p>

            <p>
            They may possess root-like, leaf-like or stem-like structures.
            </p>

            <p>
            The main plant body of the bryophyte is haploid.
            </p>

            <p>
            It produces gametes, hence is called a gametophyte.
            </p>
            `,
        },
      },
      "CELL CYCLE AND CELL DIVISION": {
        topics: {
          "CELL CYCLE": `
            <p>
            Cell division is a very important process in all living organisms.
            </p>

            <p>
            During the division of a cell, DNA replication and cell growth also take
            place.
            </p>

            <p>
            All these processes, i.e., cell division, DNA replication, and cell growth,
            hence, have to take place in a coordinated way to ensure correct division and
            formation of progeny cells containing intact genomes.
            </p>

            <p>
            The sequence of events by which a cell duplicates its genome, synthesises the
            other constituents of the cell and eventually divides into two daughter cells
            is termed cell cycle.
            </p>

            <p>
            Although cell growth (in terms of cytoplasmic increase) is a continuous
            process, DNA synthesis occurs only during one specific stage in the cell
            cycle.
            </p>

            <p>
            The replicated chromosomes (DNA) are then distributed to daughter nuclei by
            a complex series of events during cell division.
            </p>

            <p>
            These events are themselves under genetic control.
            </p>
            `,
          "Significance of Mitosis": `
            <p>
            Mitosis or the equational division is usually restricted to the diploid cells
            only.
            </p>

            <p>
            However, in some lower plants and in some social insects haploid cells also
            divide by mitosis.
            </p>

            <p>
            It is very essential to understand the significance of this division in the
            life of an organism.
            </p>

            <p>
            Are you aware of some examples where you have studied about haploid and
            diploid insects?
            </p>

            <p>
            Mitosis usually results in the production of diploid daughter cells with
            identical genetic complement.
            </p>

            <p>
            The growth of multicellular organisms is due to mitosis.
            </p>

            <p>
            Cell growth results in disturbing the ratio between the nucleus and the
            cytoplasm.
            </p>

            <p>
            It therefore becomes essential for the cell to divide to restore the
            nucleo-cytoplasmic ratio.
            </p>

            <p>
            A very significant contribution of mitosis is cell repair.
            </p>

            <p>
            The cells of the upper layer of the epidermis, cells of the lining of the
            gut, and blood cells are being constantly replaced.
            </p>
            `,
        },
      },
    },
  },

  Geography: {
    "Fundamentals of Physical Geography": {
      "INTERIOR OF THE EARTH": {
        topics: {
          Earthquake: `
            <p>
            The study of seismic waves provides a complete picture of the layered interior.
            </p>

            <p>
            An earthquake in simple words is shaking of the earth. It is a natural event.
            </p>

            <p>
            It is caused due to release of energy, which generates waves that travel in all
            directions.
            </p>

            <p>
            <strong>Why does the earth shake?</strong>
            </p>

            <p>
            The release of energy occurs along a fault.
            </p>

            <p>
            A fault is a sharp break in the crustal rocks.
            </p>

            <p>
            Rocks along a fault tend to move in opposite directions.
            </p>

            <p>
            As the overlying rock strata press them, the friction locks them together.
            </p>

            <p>
            However, their tendency to move apart at some point of time overcomes the
            friction.
            </p>

            <p>
            As a result, the blocks get deformed and eventually, they slide past one
            another abruptly.
            </p>

            <p>
            This causes a release of energy, and the energy waves travel in all directions.
            </p>

            <p>
            The point where the energy is released is called the focus of an earthquake,
            alternatively, it is called the hypocentre.
            </p>

            <p>
            The energy waves travelling in different directions reach the surface.
            </p>

            <p>
            The point on the surface, nearest to the focus, is called epicentre.
            </p>

            <p>
            It is the first one to experience the waves.
            </p>

            <p>
            It is a point directly above the focus.
            </p>
            `,
          "STRUCTURE OF THE EARTH": `
            <p>
            <strong>The Crust</strong>
            </p>

            <p>
            It is the outermost solid part of the earth.
            </p>

            <p>
            It is brittle in nature.
            </p>

            <p>
            The thickness of the crust varies under the oceanic and continental areas.
            </p>

            <p>
            Oceanic crust is thinner as compared to the continental crust.
            </p>

            <p>
            The mean thickness of oceanic crust is 5 km whereas that of the continental is
            around 30 km.
            </p>

            <p>
            The continental crust is thicker in the areas of major mountain systems.
            </p>

            <p>
            It is as much as 70 km thick in the Himalayan region.
            </p>
            `,
        },
      },
      "WATER IN THE ATMOSPHERE": {
        topics: {
          Precipitation: `
            <p>
            The process of continuous condensation in free air helps the condensed particles
            to grow in size.
            </p>

            <p>
            When the resistance of the air fails to hold them against the force of gravity,
            they fall on to the earth’s surface.
            </p>

            <p>
            So after the condensation of water vapour, the release of moisture is known as
            precipitation.
            </p>

            <p>
            This may take place in liquid or solid form.
            </p>

            <p>
            The precipitation in the form of water is called rainfall, when the temperature
            is lower than the 00C, precipitation takes place in the form of fine flakes of
            snow and is called snowfall.
            </p>

            <p>
            Moisture is released in the form of hexagonal crystals.
            </p>

            <p>
            These crystals form flakes of snow.
            </p>

            <p>
            Besides rain and snow, other forms of precipitation are sleet and hail, though
            the latter are limited in occurrence and are sporadic in both time and space.
            </p>

            <p>
            Sleet is frozen raindrops and refrozen melted snow-water.
            </p>

            <p>
            When a layer of air with the temperature above freezing point overlies a
            subfreezing layer near the ground, precipitation takes place in the form of
            sleet.
            </p>

            <p>
            Raindrops, which leave the warmer air, encounter the colder air below.
            </p>
            `,
          "EVAPORATION AND CONDENSATION": `
            <p>
            The amount of water vapour in the atmosphere is added or withdrawn due to
            evaporation and condensation respectively.
            </p>

            <p>
            Evaporation is a process by which water is transformed from liquid to gaseous
            state.
            </p>

            <p>
            Heat is the main cause for evaporation.
            </p>

            <p>
            The temperature at which the water starts evaporating is referred to as the
            latent heat of vapourisation.
            </p>

            <p>
            Increase in temperature increases water absorption and retention capacity of
            the given parcel of air.
            </p>

            <p>
            Similarly, if the moisture content is low, air has a potentiality of absorbing
            and retaining moisture.
            </p>

            <p>
            Movement of air replaces the saturated layer with the unsaturated layer.
            </p>

            <p>
            Hence, the greater the movement of air, the greater is the evaporation.
            </p>
            `,
        },
      },
    },

    "Indian Physical Environment": {
      "STRUCTURE AND PHYSIOGRAPHY": {
        topics: {
          PHYSIOGRAPHY: `
            <p>
            ‘Physiography’ of an area is the outcome of structure, process and the stage of
            development.
            </p>

            <p>
            The land of India is characterised by great diversity in its physical features.
            </p>

            <p>
            The north has a vast expanse of rugged topography consisting of a series of
            mountain ranges with varied peaks, beautiful valleys and deep gorges.
            </p>

            <p>
            The south consists of stable table land with highly dissected plateaus,
            denuded rocks and developed series of scarps.
            </p>

            <p>
            In between these two lies the vast north Indian plain.
            </p>

            <p>
            Based on these macro variations, India can be divided into the following
            physiographic divisions:
            </p>

            <ul>
            <li>(1) The Northern and North-eastern Mountains</li>
            <li>(2) The Northern Plain</li>
            </ul>
            `,
          "The North and Northeastern Mountains": `
            <p>
            The North and Northeastern Mountains consist of the Himalayas and the
            Northeastern hills.
            </p>

            <p>
            The Himalayas consist of a series of parallel mountain ranges.
            </p>

            <p>
            Some of the important ranges are the Greater Himalayan range, which includes
            the Great Himalayas and the Shiwalik.
            </p>

            <p>
            The general orientation of these ranges is from northwest to the southeast
            direction in the northwestern part of India.
            </p>

            <p>
            Himalayas in the Darjiling and Sikkim regions lie in an eastwest direction,
            while in Arunachal Pradesh they are from southwest to the northwest direction.
            </p>

            <p>
            In Nagaland, Manipur and Mizoram, they are in the northsouth direction.
            </p>

            <p>
            The approximate length of the Great Himalayan range, also known as the central
            axial range, is 2,500 km from east to west, and their width varies between
            160–400 km from north to south.
            </p>

            <p>
            It is also evident from the map that the Himalayas stand almost like a strong
            and long wall between the Indian subcontinent and the Central and East Asian
            countries.
            </p>

            <p>
            Himalayas are not only the physical barrier, they are also a climatic, drainage
            and cultural divide.
            </p>

            <p>
            Can you identify the impact of Himalayas on the geoenvironment of the countries
            of South Asia?
            </p>

            <p>
            Can you find some other examples of similar geoenvironmental divide in the
            world?
            </p>
            `,
        },
      },
      "NATURAL VEGETATION": {
        topics: {
          "Tropical Evergreen ": `
            <p>
            These forests are found in the western slope of the Western Ghats, hills of the
            northeastern region and the Andaman and Nicobar Islands.
            </p>

            <p>
            They are found in warm and humid areas with an annual precipitation of over
            200 cm and mean annual temperature above 22oC.
            </p>

            <p>
            Tropical evergreen forests are well stratified, with layers closer to the
            ground and are covered with shrubs and creepers, with short structured trees
            followed by tall variety of trees.
            </p>

            <p>
            In these forests, trees reach great heights up to 60 m or above.
            </p>

            <p>
            There is no definite time for trees to shed their leaves, flowering and
            fruition.
            </p>

            <p>
            As such these forests appear green all the year round.
            </p>

            <p>
            Species found in these forests include rosewood, mahogony, aini, ebony, etc.
            </p>
            `,
          "Tropical Deciduous Forests": `
            <p>
            These are the most widespread forests in India.
            </p>

            <p>
            They are also called the monsoon forests.
            </p>

            <p>
            They spread over regions which receive rainfall between 70-200 cm.
            </p>

            <p>
            On the basis of the availability of water, these forests are further divided
            into moist and dry deciduous.
            </p>

            <p>
            The moist deciduous forests are more pronounced in the regions which record
            rainfall between 100-200 cm.
            </p>

            <p>
            These forests are found in the northeastern states along the foothills of
            Himalayas, eastern slopes of the Western Ghats and Odisha.
            </p>

            <p>
            Teak, sal, shisham, hurra, mahua, amla, semul, kusum, and sandalwood etc. are the
            main species of these forests.
            </p>
            `,
        },
      },
    },
  },

  Accontancy: {
    "Financial Accounting": {
      "Recording of Transactions": {
        topics: {
          "Accounting Equation": `
            <p>
            Accounting equation signifies that the assets of a business are always equal to
            the total of its liabilities and capital (owner’s equity).
            </p>

            <p>
            The equation reads as follows:
            </p>

            <p>
            A = L + C
            </p>

            <p>
            Where,
            </p>

            <p>
            A = Assets<br>
            L = Liabilities<br>
            C = Capital
            </p>

            <p>
            The above equation can also be presented in the following forms as its
            derivatives to enable the determination of missing figures of Capital (C) or
            Liabilities (L).
            </p>

            <ul>
            <li>(i) A – L = C</li>
            <li>(ii) A – C = L</li>
            </ul>

            <p>
            Since, the accounting equation depicts the fundamental relationship among the
            components of the balance sheet, it is also called the Balance Sheet Equation.
            </p>

            <p>
            As the name suggests, the balance sheet is a statement of assets, liabilities
            and capital.
            </p>

            <p>
            At any point of time resources of the business entity must be equal to the
            claims of those who have financed these resources.
            </p>

            <p>
            The proprietors and outsiders provide the resources of the business.
            </p>

            <p>
            The claim of the proprietors is called capital and that of the outsiders is
            known as liabilities.
            </p>
            `,
          "Using Debit and Credit": `
            <p>
            As already stated every transaction involves give and take aspect.
            </p>

            <p>
            In double entry accounting, every transaction affects and is recorded in at
            least two accounts.
            </p>

            <p>
            When recording each transaction, the total amount debited must equal to the
            total amount credited.
            </p>

            <p>
            In accounting, the terms — debit and credit indicate whether the transactions
            are to be recorded on the left hand side or right hand side of the account.
            </p>

            <p>
            In its simplest form, an account looks like the letter T.
            </p>

            <p>
            Because of its shape, this simple form called a T-account (refer figure 3.4).
            </p>

            <p>
            Notice that the T format has a left side and a right side for recording
            increases and decreases in the item.
            </p>

            <p>
            This helps in ascertaining the ultimate position of each item at the end of an
            accounting period.
            </p>

            <p>
            For example, if it is an account of a customer all goods sold shall appear on
            the left (debit) side of customer’s account and all payments received on the
            right side.
            </p>

            <p>
            The difference between the totals of the two sides called balance shall reflect
            the amount due to the customer.
            </p>
            `,
        },
      },
      "Depreciation, Provisions and Reserves": {
        topics: {
          Depreciation: `
                <p>
                Now you are aware that fixed assets are the assets which are used in business
                for more than one accounting year.
                </p>

                <p>
                Fixed assets (technically referred to as “depreciable assets”) tend to reduce
                their value once they are put to use.
                </p>

                <p>
                In general, the term “Depreciation” means decline in the value of a fixed
                assets due to use, passage of time or obsolescence.
                </p>

                <p>
                In other words, if a business enterprise procures a machine and uses it in
                production process then the value of machine declines with its usage.
                </p>

                <p>
                Even if the machine is not used in production process, we can not expect it to
                realise the same sales price due to the passage of time or arrival of a new
                model (obsolescence).
                </p>

                <p>
                It implies that fixed assets are subject to decline in value and this decline
                is technically referred to as depreciation.
                </p>

                <p>
                As an accounting term, depreciation is that part of the cost of a fixed asset
                which has expired on account of its usage and/or lapse of time.
                </p>

                <p>
                Hence, depreciation is an expired cost or expense, charged against the revenue
                of a given accounting period.
                </p>
                `,
          Reserves: `
            <p>
            A part of the profit may be set aside and retained in the business to provide
            for certain future needs like growth and expansion or to meet future
            contingencies such as workmen compensation.
            </p>

            <p>
            Unlike provisions, reserves are the appropriations of profit to strengthen the
            financial position of the business.
            </p>

            <p>
            Reserve is not a charge against profit as it is not meant to cover any known
            liability or expected loss in future.
            </p>

            <p>
            However, retention of profits in the form of reserves reduces the amount of
            profits available for distribution among the owners of the business.
            </p>

            <p>
            It is shown under the head Reserves and Surpluses on the liabilities side of the
            balance sheet after capital.
            </p>

            <p>
            Examples of reserves are:
            </p>

            <ul>
            <li>General reserve;</li>
            <li>Workmen compensation fund;</li>
            <li>Investment fluctuation fund;</li>
            <li>Capital reserve;</li>
            <li>Dividend equalisation reserve;</li>
            <li>Reserve for redemption of debenture</li>
            </ul>
            `,
        },
      },
    },

    "Accountancy-II": {
      "Financials Statement": {
        topics: {
          "Capital and Revenue": `
                <p>
                A very important distinction in accounting is between capital and revenue
                items.
                </p>

                <p>
                The distinction has important implications for making of the trading and
                profit and loss account and balance sheet.
                </p>

                <p>
                The revenue items form part of the trading and profit and loss account, the
                capital items help in the preparation of a balance sheet.
                </p>

                <p>
                <strong>8.2.1 Expenditure</strong>
                </p>

                <p>
                Whenever payment and/or incurrence of an outlay are made for a purpose other
                than the settlement of an existing liability, it is called expenditure.
                </p>

                <p>
                The expenditures are incurred with a viewpoint they would give benefits to
                the business.
                </p>

                <p>
                The benefit of an expenditure may extend up to one accounting year or more
                than one year.
                </p>

                <p>
                If the benefit of expenditure extends up to one accounting period, it is
                termed as revenue expenditure.
                </p>
                `,
          "Gross Profit and Net Profit": `
                <p>
                The trading and profit and loss can be seen as combination of two accounts,
                viz. Trading account and Profit and Loss account.
                </p>

                <p>
                The trading account or the first part ascertains the gross profit and profit
                and loss account or the second part ascertains net profit.
                </p>

                <p>
                <strong>Trading Account</strong>
                </p>

                <p>
                The trading account ascertains the result from basic operational activities
                of the business.
                </p>

                <p>
                The basic operational activity involves the manufacturing, purchasing and
                selling of goods.
                </p>

                <p>
                It is prepared to ascertain whether the selling of goods and/or rendering of
                services to customers have proved profitable for the business or not.
                </p>

                <p>
                Purchases is one of the main constituents of expenses in business
                organisation.
                </p>

                <p>
                Besides purchases, the remaining expenses are divided into two categories,
                viz. direct expenses and indirect expenses.
                </p>
                `,
        },
      },
      "Financial Statements - II": {
        topics: {
          "Accrued Income ": `
                <p>
                It may also happen that certain items of income such as interest on loan,
                commission, rent, etc. are earned during the current accounting year but have
                not been actually received by the end of the same year.
                </p>

                <p>
                Such incomes are known as accrued income.
                </p>

                <p>
                The adjusting entry for accrued income is :
                </p>

                <p>
                Accrued income A/c Dr.<br>
                To Concerned income A/c
                </p>

                <p>
                The amount of accrued income will be added to the related income in the
                profit and loss account and the new account of accrued income will appear on
                the asset side of the balance sheet.
                </p>
                `,
          "Interest on Capital": `
            <p>
            Sometimes, the proprietor may like to know the profit made by the business
            after providing for interest on capital.
            </p>

            <p>
            In such a situation, interest is calculated at a given rate of interest on
            capital as at the beginning of the accounting year.
            </p>

            <p>
            If however, any additional capital is brought during the year, the interest
            may also be computed on such amount from the date on which it was brought
            into the business.
            </p>

            <p>
            Such interest is treated as expense for the business and the following
            journal entry is recorded in the books of account:
            </p>

            <p>
            Interest on capital A/c Dr.<br>
            &nbsp;&nbsp;To Capital A/c
            </p>

            <p>
            In the final accounts, it is shown as an expense on the debit side of the
            profit and loss account and added to capital in the balance sheet.
            </p>
            `,
        },
      },
    },
  },
};
