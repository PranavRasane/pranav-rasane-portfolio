import { useParams, Link } from 'react-router-dom'
import { PROJECTS } from '../constants/index'
import { motion } from 'framer-motion'
import {
  MdArrowBack,
  MdArrowOutward,
  MdCheckCircle,
  MdShowChart,
  MdSpeed,
  MdAgriculture,
  MdSecurity,
  MdWork,
  MdAccountBalance,
} from 'react-icons/md'

const ProjectDetail = () => {
  const { id } = useParams()
  const project = PROJECTS.find((p) => p.id === parseInt(id))

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Project not found</h2>
          <Link to="/" className="text-blue-400 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    )
  }

  const theme = project.theme || {}

  // Container variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  // Project-specific layouts
  const renderProjectCaseStudy = () => {
    switch (project.id) {
      case 1: // AgroPredict
        return renderAgroPredictCaseStudy()
      case 2: // Drone
        return renderDroneCaseStudy()
      case 3: // Resume Classifier
        return renderResumeCaseStudy()
      case 4: // SmartLoan
        return renderSmartLoanCaseStudy()
      default:
        return renderDefaultCaseStudy()
    }
  }

  const renderAgroPredictCaseStudy = () => (
    <motion.div
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Executive Summary */}
      <motion.section
        variants={itemVariants}
        className="glass-effect rounded-2xl p-8 backdrop-blur-sm border border-white/10"
      >
        <h2
          className={`text-3xl font-bold mb-6 ${theme.accent} ${theme.fontClass}`}
        >
          Executive Summary
        </h2>
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center p-4 rounded-xl bg-green-900/20 border border-green-500/30"
          >
            <MdSpeed className="text-2xl mx-auto mb-2 text-green-400" />
            <div className="text-xl font-bold text-green-400">
              {project.caseStudy.performance?.inferenceSpeed}
            </div>
            <div className="text-sm text-gray-300">Response Time</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center p-4 rounded-xl bg-green-900/20 border border-green-500/30"
          >
            <MdShowChart className="text-2xl mx-auto mb-2 text-green-400" />
            <div className="text-xl font-bold text-green-400">
              {project.metrics.accuracy}%
            </div>
            <div className="text-sm text-gray-300">Accuracy</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center p-4 rounded-xl bg-green-900/20 border border-green-500/30"
          >
            <MdAgriculture className="text-2xl mx-auto mb-2 text-green-400" />
            <div className="text-xl font-bold text-green-400">
              {project.metrics.cropCoverage}
            </div>
            <div className="text-sm text-gray-300">Crops</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center p-4 rounded-xl bg-green-900/20 border border-green-500/30"
          >
            <MdCheckCircle className="text-2xl mx-auto mb-2 text-green-400" />
            <div className="text-xl font-bold text-green-400">
              {project.metrics.timeReduction}%
            </div>
            <div className="text-sm text-gray-300">Time Saved</div>
          </motion.div>
        </div>
        <p className="text-lg leading-relaxed text-gray-200">
          {project.caseStudy.solution}
        </p>
      </motion.section>

      {/* Problem & Solution */}
      <div className="grid md:grid-cols-2 gap-6">
        <motion.section
          variants={itemVariants}
          className="glass-effect rounded-2xl p-6 backdrop-blur-sm border border-white/10"
        >
          <h3 className={`text-2xl font-bold mb-4 ${theme.accent}`}>
            The Challenge
          </h3>
          <p className="text-gray-200 mb-4">{project.caseStudy.problem}</p>
          <div className="space-y-2">
            {[
              '2-4 hours manual analysis per decision',
              '15-20% yield reduction from wrong crops',
              'Limited expert accessibility for small farmers',
            ].map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-200 text-sm">{point}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          variants={itemVariants}
          className="glass-effect rounded-2xl p-6 backdrop-blur-sm border border-white/10"
        >
          <h3 className={`text-2xl font-bold mb-4 ${theme.accent}`}>
            The Solution
          </h3>
          <p className="text-gray-200 mb-4">{project.caseStudy.approach}</p>
          <div className="space-y-2">
            {project.caseStudy.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <MdCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                <p className="text-gray-200 text-sm">{feature}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Parameters Analyzed */}
      <motion.section
        variants={itemVariants}
        className="glass-effect rounded-2xl p-8 backdrop-blur-sm border border-white/10"
      >
        <h2 className={`text-3xl font-bold mb-6 ${theme.accent}`}>
          Parameters Analyzed
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {project.caseStudy.parameters.map((param, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-4 rounded-xl bg-green-900/20 border border-green-500/30"
            >
              <div className="text-green-400 font-semibold text-sm mb-1">
                {param.name}
              </div>
              <div className="text-gray-300 text-xs">{param.range}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  )

  const renderDroneCaseStudy = () => (
    <motion.div
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Executive Summary */}
      <motion.section
        variants={itemVariants}
        className="glass-effect rounded-2xl p-8 backdrop-blur-sm border border-white/10"
      >
        <h2
          className={`text-3xl font-bold mb-6 ${theme.accent} ${theme.fontClass}`}
        >
          System Overview
        </h2>
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center p-4 rounded-xl bg-blue-900/20 border border-blue-500/30"
          >
            <MdSecurity className="text-2xl mx-auto mb-2 text-blue-400" />
            <div className="text-xl font-bold text-blue-400">
              {project.metrics.anomalyTypes}
            </div>
            <div className="text-sm text-gray-300">Detection Types</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center p-4 rounded-xl bg-blue-900/20 border border-blue-500/30"
          >
            <MdShowChart className="text-2xl mx-auto mb-2 text-blue-400" />
            <div className="text-xl font-bold text-blue-400">
              {project.metrics.detectionAccuracy}%
            </div>
            <div className="text-sm text-gray-300">Accuracy</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center p-4 rounded-xl bg-blue-900/20 border border-blue-500/30"
          >
            <MdSpeed className="text-2xl mx-auto mb-2 text-blue-400" />
            <div className="text-xl font-bold text-blue-400">
              {project.metrics.realTimeSpeed}%
            </div>
            <div className="text-sm text-gray-300">Real-time</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center p-4 rounded-xl bg-blue-900/20 border border-blue-500/30"
          >
            <MdCheckCircle className="text-2xl mx-auto mb-2 text-blue-400" />
            <div className="text-xl font-bold text-blue-400">
              {project.metrics.missionSuccess}%
            </div>
            <div className="text-sm text-gray-300">Success Rate</div>
          </motion.div>
        </div>
        <p className="text-lg leading-relaxed text-gray-200">
          {project.caseStudy.solution}
        </p>
      </motion.section>

      {/* Detection Capabilities */}
      <motion.section
        variants={itemVariants}
        className="glass-effect rounded-2xl p-8 backdrop-blur-sm border border-white/10"
      >
        <h2 className={`text-3xl font-bold mb-6 ${theme.accent}`}>
          AI Detection Capabilities
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-300">
              Detection Classes
            </h3>
            <div className="space-y-3">
              {project.caseStudy.detectionClasses.map((cls, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-blue-900/20 border border-blue-500/30"
                >
                  <MdCheckCircle className="text-blue-400" />
                  <span className="text-gray-200">{cls}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-300">
              Key Features
            </h3>
            <div className="space-y-3">
              {project.caseStudy.features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-blue-900/20 border border-blue-500/30"
                >
                  <MdCheckCircle className="text-blue-400" />
                  <span className="text-gray-200 text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  )

  const renderResumeCaseStudy = () => (
    <motion.div
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Executive Summary */}
      <motion.section
        variants={itemVariants}
        className="glass-effect rounded-2xl p-8 backdrop-blur-sm border border-white/10"
      >
        <h2
          className={`text-3xl font-bold mb-6 ${theme.accent} ${theme.fontClass}`}
        >
          Performance Summary
        </h2>
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center p-4 rounded-xl bg-purple-900/20 border border-purple-500/30"
          >
            <MdShowChart className="text-2xl mx-auto mb-2 text-purple-400" />
            <div className="text-xl font-bold text-purple-400">
              {project.metrics.accuracy}%
            </div>
            <div className="text-sm text-gray-300">Accuracy</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center p-4 rounded-xl bg-purple-900/20 border border-purple-500/30"
          >
            <MdWork className="text-2xl mx-auto mb-2 text-purple-400" />
            <div className="text-xl font-bold text-purple-400">
              {project.metrics.categories}
            </div>
            <div className="text-sm text-gray-300">Job Roles</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center p-4 rounded-xl bg-purple-900/20 border border-purple-500/30"
          >
            <MdSpeed className="text-2xl mx-auto mb-2 text-purple-400" />
            <div className="text-xl font-bold text-purple-400">
              {project.metrics.screeningTime}%
            </div>
            <div className="text-sm text-gray-300">Time Saved</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center p-4 rounded-xl bg-purple-900/20 border border-purple-500/30"
          >
            <MdCheckCircle className="text-2xl mx-auto mb-2 text-purple-400" />
            <div className="text-xl font-bold text-purple-400">
              {project.metrics.processingSpeed}s
            </div>
            <div className="text-sm text-gray-300">Processing</div>
          </motion.div>
        </div>
        <p className="text-lg leading-relaxed text-gray-200">
          {project.caseStudy.solution}
        </p>
      </motion.section>

      {/* Performance Metrics */}
      <motion.section
        variants={itemVariants}
        className="glass-effect rounded-2xl p-8 backdrop-blur-sm border border-white/10"
      >
        <h2 className={`text-3xl font-bold mb-6 ${theme.accent}`}>
          Model Performance
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              label: 'Accuracy',
              value: `${project.caseStudy.performance.accuracy}%`,
            },
            {
              label: 'Precision',
              value: `${project.caseStudy.performance.precision}%`,
            },
            {
              label: 'Recall',
              value: `${project.caseStudy.performance.recall}%`,
            },
            {
              label: 'F1-Score',
              value: `${project.caseStudy.performance.f1Score}%`,
            },
          ].map((metric, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-xl bg-purple-900/30 border border-purple-500/20"
            >
              <div className="text-2xl font-bold text-purple-400 mb-2">
                {metric.value}
              </div>
              <div className="text-sm text-gray-300">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  )

  const renderSmartLoanCaseStudy = () => (
    <motion.div
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Executive Summary */}
      <motion.section
        variants={itemVariants}
        className="glass-effect rounded-2xl p-8 backdrop-blur-sm border border-white/10"
      >
        <h2
          className={`text-3xl font-bold mb-6 ${theme.accent} ${theme.fontClass}`}
        >
          Financial Impact
        </h2>
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center p-4 rounded-xl bg-amber-900/20 border border-amber-500/30"
          >
            <MdAccountBalance className="text-2xl mx-auto mb-2 text-amber-400" />
            <div className="text-xl font-bold text-amber-400">
              {project.metrics.accuracy}%
            </div>
            <div className="text-sm text-gray-300">Accuracy</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center p-4 rounded-xl bg-amber-900/20 border border-amber-500/30"
          >
            <MdSpeed className="text-2xl mx-auto mb-2 text-amber-400" />
            <div className="text-xl font-bold text-amber-400">
              {project.metrics.processingSpeed}%
            </div>
            <div className="text-sm text-gray-300">Speed</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center p-4 rounded-xl bg-amber-900/20 border border-amber-500/30"
          >
            <MdShowChart className="text-2xl mx-auto mb-2 text-amber-400" />
            <div className="text-xl font-bold text-amber-400">
              {project.metrics.features}
            </div>
            <div className="text-sm text-gray-300">Features</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center p-4 rounded-xl bg-amber-900/20 border border-amber-500/30"
          >
            <MdCheckCircle className="text-2xl mx-auto mb-2 text-amber-400" />
            <div className="text-xl font-bold text-amber-400">
              {project.metrics.applications}+
            </div>
            <div className="text-sm text-gray-300">Applications</div>
          </motion.div>
        </div>
        <p className="text-lg leading-relaxed text-gray-200">
          {project.caseStudy.solution}
        </p>
      </motion.section>

      {/* Key Parameters */}
      <motion.section
        variants={itemVariants}
        className="glass-effect rounded-2xl p-8 backdrop-blur-sm border border-white/10"
      >
        <h2 className={`text-3xl font-bold mb-6 ${theme.accent}`}>
          Risk Assessment Parameters
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {project.caseStudy.parameters.map((param, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-4 rounded-xl bg-amber-900/20 border border-amber-500/30"
            >
              <div className="text-amber-400 font-semibold text-sm">
                {param}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  )

  const renderDefaultCaseStudy = () => (
    <motion.div
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={itemVariants}
        className="glass-effect rounded-2xl p-8 backdrop-blur-sm border border-white/10"
      >
        <h2
          className={`text-3xl font-bold mb-6 ${theme.accent} ${theme.fontClass}`}
        >
          Project Details
        </h2>
        <div className="prose prose-invert max-w-none">
          <div className="text-lg leading-relaxed text-gray-200">
            {project.caseStudy?.solution}
          </div>
        </div>
      </motion.section>
    </motion.div>
  )

  return (
    <div className={`min-h-screen text-white pt-20 ${theme.background}`}>
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-24 left-6 z-40"
      >
        <Link
          to="/"
          className="flex items-center gap-2 px-4 py-2 rounded-lg glass-effect border border-white/20 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
        >
          <MdArrowBack />
          <span>Back to Portfolio</span>
        </Link>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 relative">
        {/* Theme-specific decorations */}
        {project.id === 1 && (
          <>
            <motion.div
              className="absolute top-20 right-10 text-3xl opacity-20 floating-element"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              🌿
            </motion.div>
            <motion.div
              className="absolute bottom-40 left-8 text-2xl opacity-15 floating-element"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7 }}
              style={{ animationDelay: '2s' }}
            >
              🍃
            </motion.div>
          </>
        )}

        {project.id === 2 && (
          <>
            <motion.div
              className="absolute top-32 right-16 text-2xl opacity-20 floating-element"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              📡
            </motion.div>
            <motion.div
              className="absolute bottom-20 left-20 text-xl opacity-15 floating-element"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7 }}
              style={{ animationDelay: '1.5s' }}
            >
              🛰️
            </motion.div>
          </>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="text-6xl mb-4"
            >
              {theme.icon}
            </motion.div>

            <h1 className={`text-5xl font-bold mb-4 ${theme.fontClass}`}>
              {project.name}
            </h1>

            <div
              className={`w-24 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r ${theme.primary}`}
            />

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Metrics Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            {project.metrics &&
              Object.entries(project.metrics).map(([key, value], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className={`glass-effect rounded-2xl p-4 text-center backdrop-blur-sm border border-white/10 transition-all duration-300 ${
                    theme.background === 'agropredict-bg'
                      ? 'green-glow'
                      : theme.background === 'drone-bg'
                      ? 'blue-glow'
                      : theme.background === 'resume-bg'
                      ? 'purple-glow'
                      : theme.background === 'loan-bg'
                      ? 'orange-glow'
                      : ''
                  }`}
                >
                  <div className={`text-2xl font-bold ${theme.accent} mb-1`}>
                    {typeof value === 'number'
                      ? `${value}${
                          key.includes('accuracy') ||
                          key.includes('timeReduction') ||
                          key.includes('screeningTime') ||
                          key.includes('processingSpeed') ||
                          key.includes('realTimeSpeed') ||
                          key.includes('missionSuccess') ||
                          key.includes('detectionAccuracy')
                            ? '%'
                            : ''
                        }`
                      : value}
                  </div>
                  <div className="text-sm text-gray-300 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </motion.div>
              ))}
          </motion.div>

          {/* Case Study Content */}
          {renderProjectCaseStudy()}

          {/* Tech Stack */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="glass-effect rounded-2xl p-8 backdrop-blur-sm border border-white/10 mt-12"
          >
            <h2
              className={`text-3xl font-bold mb-6 ${theme.accent} ${theme.fontClass}`}
            >
              Technology Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.caseStudy.techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.6 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className={`px-4 py-2 rounded-full bg-gradient-to-r ${theme.secondary} text-white font-medium backdrop-blur-sm border border-white/20 transition-transform duration-300 cursor-default`}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.section>

          {/* GitHub Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7 }}
            className="flex justify-center items-center mt-12"
          >
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-xl hover:bg-gray-200 transition-colors duration-300 font-semibold text-lg shadow-2xl"
            >
              <span>View GitHub Repository</span>
              <MdArrowOutward className="text-lg" />
            </motion.a>
          </motion.div>

          {/* Implementation Images/PDF Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="mt-12"
          >
            <h2
              className={`text-3xl font-bold mb-6 text-center ${theme.accent}`}
            >
              Implementation & Documentation
            </h2>

            {/* For projects with multiple images (AgroPredict, SmartLoan) */}
            {project.implementationImages &&
              project.implementationImages.length > 0 && (
                <div className="space-y-6">
                  {project.implementationImages.map((image, index) => (
                    <motion.div
                      key={index}
                      className="glass-effect rounded-2xl p-6 backdrop-blur-sm border border-white/10"
                      whileHover={{ scale: 1.01 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.img
                        src={image}
                        alt={`${project.name} Implementation ${index + 1}`}
                        className="w-full h-auto rounded-xl shadow-2xl"
                      />
                    </motion.div>
                  ))}
                </div>
              )}

            {/* For projects with PDF report (Drone) */}
            {project.reportPdf && (
              <div className="glass-effect rounded-2xl p-8 backdrop-blur-sm border border-white/10 text-center">
                <div className="text-6xl mb-4">📄</div>
                <h3 className={`text-2xl font-bold mb-4 ${theme.accent}`}>
                  Project Report
                </h3>
                <p className="text-gray-300 mb-6">
                  Detailed documentation and analysis of the project
                  implementation
                </p>
                <motion.a
                  href={project.reportPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-white text-black rounded-xl hover:bg-gray-200 transition-colors duration-300 font-semibold"
                >
                  <span>View Project Report</span>
                  <MdArrowOutward className="text-lg" />
                </motion.a>
              </div>
            )}

            {/* For single image projects (Resume Classifier) - already handled by implementationImages array */}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectDetail
