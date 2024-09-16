import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { SH20RAJ } from "@/components/sh20raj";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const syllabusData = [
  {
    value: "ma103",
    title: "MA24101 - Mathematics I",
    modules: [
      {
        title: "Module 1: Sequences and Series",
        content:
          "Sequences, Convergence of Sequence. Series, Convergence of Series, Tests for Convergence: Comparison tests, Ratio test, Cauchy’s root test, Raabe’s test, Gauss test, Cauchy's Integral test, Alternating series, Leibnitz test, Absolute and Conditional Convergence.",
      },
      {
        title: "Module 2: Matrices",
        content:
          "Rank of a Matrix, elementary transformations, Row - reduced Echelon form. Vectors, Linear Independence and Dependence of Vectors. Consistency of system of linear equations. Eigenvalues, Eigenvectors, Cayley - Hamilton theorem.",
      },
      {
        title: "Module 3: Advance Differential Calculus",
        content:
          "Function of several variables, Limit, Continuity, Partial derivatives, Euler’s theorem for homogeneous functions, Total derivatives, Chain rules, Jacobians and its properties, Taylor series for function of two variables, Maxima – Minima, Lagrange’s method of multipliers.",
      },
      {
        title: "Module 4: Advance Integral Calculus",
        content:
          "Beta and Gamma functions: definition and properties. Double integrals, double integrals in polar coordinates, Change of order of integration, Triple Integrals, cylindrical and spherical coordinate systems, transformation of coordinates, Applications of double and triple integrals in areas and volumes.",
      },
      {
        title: "Module 5: Vector Calculus",
        content:
          "Scalar and vector point functions, gradient, directional derivative, divergence, curl, vector equations and identities. Line Integral, Work done, Conservative field, Green’s theorem in a plane, Surface and volume integrals, Gauss – divergence theorem, Stoke’s theorem.",
      },
    ],
  },
  {
    value: "ph113",
    title: "PH24101 - Physics",
    modules: [
      {
        title: "Module 1: Physical Optics",
        content:
          "Polarization, Malus’ Law, Brewster’s Law, Double Refraction, Interference in thin films (Parallel films), Interference in wedge-shaped layers, Newton’s rings, Fraunhofer diffraction by single slit, Double slit.",
      },
      {
        title: "Module 2: Electromagnetic Theory",
        content:
          "Curl, Gradient, Divergence, Gauss theorem, Stokes theorem, Gauss’s law, Applications, Concept of electric potential, Relationship between E and V, Polarization of dielectrics, dielectric constant, Boundary conditions for E & D, Gauss’s law in magnetostatics, Ampere’s circuital law, Boundary conditions for B & H, Equation of continuity of charge, Displacement current, Maxwell’s equations.",
      },
      {
        title: "Module 3: Special Theory of Relativity",
        content:
          "Introduction, Inertial frame of reference, Galilean transformations, Postulates, Lorentz transformations and its conclusions, Length contraction, time dilation, velocity addition, Mass change, Einstein's mass energy relation.",
      },
      {
        title: "Module 4: Quantum Mechanics",
        content:
          "Planck's theory of black-body radiation, Compton effect, Wave particle duality, De Broglie waves, Davisson and Germer's experiment, Uncertainty principle, physical interpretation of wave function, Schrodinger equation in one dimension, free particle, particle in an infinite square well.",
      },
      {
        title: "Module 5: Lasers",
        content:
          "Spontaneous and stimulated emission, Einstein's A and B coefficients, Population-inversion, Light amplification, Basic laser action, Ruby and He-Ne lasers, Properties and applications of laser radiation, Elementary ideas of fiber optics and application of fiber optic cables.",
      },
    ],
  },
  {
    value: "be101",
    title: "BE24101 - Biological Science for Engineers",
    modules: [
      {
        title: "Module 1: Basic Cell Biology",
        content:
          "Origin of life, Cell theory, Cell Structure and function, Biomolecules, Cell cycle and cell division, Biological Organization.",
      },
      {
        title: "Module 2: Bioenergetics and Metabolism",
        content:
          "Gibbs free energy and thermodynamics, aerobic and anaerobic respiration, Glycolysis, Krebs cycle and electron transport chain, Beta oxidation, Photosynthesis.",
      },
      {
        title: "Module 3: Enzymes and its Application",
        content:
          "Classification of enzymes, Structure and mechanism of enzyme action and uses of enzymes, factors affecting enzyme activity, Immobilization of enzymes and their application.",
      },
      {
        title: "Module 4: Biological Signal Generation and Propagation",
        content:
          "Nerve cell structure and signal propagation. Mechanism of vision and hearing, cell signaling, Circadian rhythm.",
      },
      {
        title: "Module 5: Engineering Biological Systems and its Applications",
        content:
          "Central dogma of molecular biology, Methods in genetic engineering and application, PCR, ELISA and its application, stem cell and tissue engineering. Artificial Intelligence in Biology, Plant factory.",
      },
    ],
  },
  {
    value: "ee24101",
    title: "EE24101 - Basic Electrical Engineering",
    modules: [
      {
        title: "Module 1: Single-phase AC Circuits",
        content:
          "Series Circuits: Common signals and their waveforms, RMS and Average value, Form factor & Peak factor of sinusoidal waveform, Impedance of Series circuits. Phasor diagram, Active Power, Power factor. Power triangle. Parallel Circuits: Admittance method, Phasor diagram. Power, Power factor. Power triangle, Series-parallel Circuit, Power factor improvement, Series and Parallel Resonance: Resonance curve, Q–factor, Dynamic Impedance and Bandwidth.",
      },
      {
        title: "Module 2: Three-Phase Circuits",
        content:
          "Line and Phase relation for Star and Delta connection, Power relations, Analysis of balanced and unbalanced 3 phase circuits, Measurement of Power.",
      },
      {
        title: "Module 3: Circuit Theorems",
        content:
          "Superposition theorem, Thevenin’s & Norton’s Theorem, Maximum Power Transfer theorem for Independent and Dependent Sources for DC and AC circuits. Coupled Circuits (Dot rule), Self and mutual inductances, Coefficient of coupling.",
      },
      {
        title:
          "Module 4: Working principles of AC Generators, motors and transformers",
        content:
          "Working principles of measuring equipments such as digital voltmeter, ammeter, power factor meter and wattmeter.",
      },
    ],
  },
  {
    value: "cs24101",
    title: "CS24101 - Programming for Problem Solving",
    modules: [
      {
        title: "Module 1: Introduction to Programming",
        content:
          "Introduction to components of a computer system (disks, memory, processor, where a program is stored and executed, operating system, compilers etc.). Problem Solving: Steps to solve logical and numerical problems. Representation of Algorithm: Flowchart/Pseudo code with examples. From algorithms to programs; source code, variables (with data types) variables and memory locations, Syntax and Logical Errors in compilation, object and executable code.",
      },
      {
        title: "Module 2: Arithmetic expressions and precedence",
        content:
          "Conditional Branching and Loops, Writing and evaluation of conditionals, Iterations, Loops.",
      },
      {
        title: "Module 3: Arrays and Strings",
        content:
          "Array, Character array, strings. Case studies to discuss the various Problems related to Basic science (Matrix addition, Matrix-matrix multiplication, Roots of an equation etc.), Sorting, Searching.",
      },
      {
        title: "Module 4: Functions and Recursion",
        content:
          "Functions (including using built-in libraries), Parameter passing in functions, call by value, call by reference. Passing arrays to functions, Recursion (Finding Factorial, Fibonacci series, Ackerman function etc.).",
      },
      {
        title: "Module 5: Structures and Pointers",
        content:
          "Defining structures and Array of Structures Pointers: Defining pointers, Use of Pointers in self-referential structures, File Handling.",
      },
    ],
  },
];

export default function Page() {
  return (
    <div className="flex flex-col gap-8 px-4 py-8 min-h-screen">
      <div className="flex flex-col gap-4 justify-center items-center h-28 mt-20">
        <div>
          <Avatar className="h-20 w-20">
            <AvatarImage src="https://github.com/sh20raj.png" alt="@shadcn" />
            <AvatarFallback>Sh</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <h1 className="text-2xl font-bold">Syllabus</h1>
          <p>Try Visiting Individual Subject Page for Syllabus.</p>
          <p>
            This page is created by <SH20RAJ />
          </p>
        </div>
      </div>
      <Accordion type="single" collapsible className="w-full mt-20">
        {syllabusData.map((subject) => (
          <AccordionItem key={subject.value} value={subject.value}>
            <AccordionTrigger>{subject.title}</AccordionTrigger>
            <AccordionContent>
              <div>
                {subject.modules.map((module, index) => (
                  <div key={index}>
                    <h3>{module.title}</h3>
                    <p>{module.content}</p>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
