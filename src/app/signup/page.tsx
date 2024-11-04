// pages/signup.js
"use client"
import React from 'react';
import { AuthFormDemo } from '../components/signup';
import { BrowserRouter as Router } from 'react-router-dom';

export default function SignupPage() {
  return (
    <Router>
      <AuthFormDemo />
    </Router>
  );
}
