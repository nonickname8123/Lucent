"use client";

import { useEffect, useState } from "react";
import {
  motion,
  animate,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";

import {
  House,
  Settings2,
  Moon,
  Waves,
  Flame,
  Bell,
  Shield,
  Sparkles,
} from "lucide-react";

export default function Page() {

  const [tab, setTab] = useState("home");

  const [theme, setTheme] = useState("ocean");

  const [notifications, setNotifications] = useState(true);

  const [protection, setProtection] = useState(false);

  const [sensitivity, setSensitivity] = useState(60);

  const liquidX = useMotionValue(0);

  const positions = {
    home: 0,
    settings: 84,
  };

  const snapTo = (target) => {

    animate(liquidX, positions[target], {
      type: "spring",
      stiffness: 210,
      damping: 22,
      mass: 0.9,
    });

    setTab(target);
  };

  useEffect(() => {
    liquidX.set(0);
  }, [liquidX]);

  const themes = {

    ocean: {
      bgPage: "bg-[#050507]",
      card: "bg-white/[0.05]",
      secondary: "bg-white/[0.04]",

      bg: "from-cyan-300/[0.95] via-cyan-300/[0.30] to-white/[0.08]",
      glow: "bg-cyan-300/[0.10]",
      liquid: "from-cyan-400/[0.45] to-cyan-200/[0.05]",
      shadow: "shadow-[0_0_80px_rgba(125,211,252,0.35)]",

      selected:
        "bg-cyan-300/20 border-cyan-200/40 text-cyan-100",

      switch:
        "bg-cyan-300/70",

      range:
        "accent-cyan-300",
    },

    dark: {
      bgPage: "bg-[#07070A]",
      card: "bg-fuchsia-500/[0.06]",
      secondary: "bg-fuchsia-400/[0.05]",

      bg: "from-violet-200/[0.95] via-fuchsia-300/[0.25] to-white/[0.06]",
      glow: "bg-fuchsia-400/[0.10]",
      liquid: "from-fuchsia-400/[0.40] to-violet-200/[0.05]",
      shadow: "shadow-[0_0_90px_rgba(217,70,239,0.35)]",

      selected:
        "bg-fuchsia-500/25 border-fuchsia-300/50 text-fuchsia-100",

      switch:
        "bg-fuchsia-400/70",

      range:
        "accent-fuchsia-400",
    },

    sunset: {
      bgPage: "bg-[#0B0806]",
      card: "bg-orange-400/[0.06]",
      secondary: "bg-orange-300/[0.05]",

      bg: "from-orange-200/[0.95] via-amber-300/[0.25] to-white/[0.08]",
      glow: "bg-orange-300/[0.10]",
      liquid: "from-orange-400/[0.45] to-yellow-200/[0.05]",
      shadow: "shadow-[0_0_80px_rgba(251,146,60,0.35)]",

      selected:
        "bg-orange-400/25 border-orange-200/50 text-orange-50",

      switch:
        "bg-orange-300/70",

      range:
        "accent-orange-300",
    },

  };

  const currentTheme = themes[theme];

  return (

    <main className={`min-h-screen text-white overflow-hidden relative transition-all duration-500 ${currentTheme.bgPage}`}>

      {/* Liquid filter */}
      <svg className="absolute w-0 h-0">
        <filter id="liquid-glass">

          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="1.2"
            result="blur"
          />

          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.006 0.006"
            numOctaves="3"
            seed="2"
            result="noise"
          />

          <feDisplacementMap
            in="blur"
            in2="noise"
            scale="20"
            xChannelSelector="R"
            yChannelSelector="G"
          />

        </filter>
      </svg>

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

      <div className="relative z-10 p-8 pb-40">

        <AnimatePresence mode="wait">

          {tab === "home" && (

            <motion.div
              key="home"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.35 }}
            >

              <h1 className="text-5xl font-semibold tracking-tight mb-6">
                Inicio
              </h1>

              <div className={`rounded-[40px] border border-white/10 ${currentTheme.card} backdrop-blur-3xl p-6 relative overflow-hidden`}>

                <div className={`h-56 rounded-[32px] border border-white/10 ${currentTheme.secondary} backdrop-blur-3xl relative overflow-hidden flex items-center justify-center`}>

                  {/* Glow */}
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.2, 0.35, 0.2],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`absolute w-44 h-44 rounded-full blur-3xl ${currentTheme.glow}`}
                  />

                  {/* Gota */}
                  <motion.div
                    animate={{
                      scaleY: [1, 1.04, 0.98, 1],
                      scaleX: [1, 0.97, 1.02, 1],
                      y: [0, -4, 0],
                      borderRadius: [
                        "55% 45% 60% 40% / 60% 40% 60% 40%",
                        "50% 50% 55% 45% / 55% 45% 55% 45%",
                        "60% 40% 50% 50% / 50% 50% 60% 40%",
                        "55% 45% 60% 40% / 60% 40% 60% 40%",
                      ],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`
                      relative
                      w-32
                      h-40
                      border
                      border-white/30
                      backdrop-blur-[80px]
                      overflow-hidden
                      ${currentTheme.shadow}
                      bg-gradient-to-b
                      ${currentTheme.bg}
                    `}
                    style={{ filter: "url(#liquid-glass)" }}
                  >

                    <motion.div
                      animate={{ y: [0, 8, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className={`absolute bottom-0 left-0 w-full h-[72%] bg-gradient-to-t ${currentTheme.liquid}`}
                    />

                    <div className="absolute top-4 left-5 w-10 h-16 rounded-full bg-white/[0.35] blur-xl rotate-[-12deg]" />

                  </motion.div>

                  {/* Texto */}
                  <div className="absolute bottom-5 text-center">

                    <p className="text-white/90 text-sm font-medium">
                      Productividad estable
                    </p>

                    <p className="text-white/40 text-xs mt-1">
                      2h sin redes sociales
                    </p>

                  </div>

                </div>

              </div>

            </motion.div>
          )}

          {tab === "settings" && (

            <motion.div
              key="settings"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
            >

              <h1 className="text-5xl font-semibold tracking-tight mb-6">
                Ajustes
              </h1>

              <div className={`rounded-[40px] border border-white/10 ${currentTheme.card} backdrop-blur-3xl p-6 space-y-5`}>

                {/* Temas */}
                <div>

                  <p className="text-white/90 text-sm mb-3">
                    Aspecto visual
                  </p>

                  <div className="grid grid-cols-3 gap-3">

                    <button
                      onClick={() => setTheme("ocean")}
                      className={`
                        p-4
                        rounded-2xl
                        border
                        transition-all
                        duration-300
                        flex
                        flex-col
                        items-center
                        gap-2
                        ${
                          theme === "ocean"
                            ? currentTheme.selected
                            : `border-white/10 ${currentTheme.secondary}`
                        }
                      `}
                    >
                      <Waves size={18} />
                      <span className="text-xs">Ocean</span>
                    </button>

                    <button
                      onClick={() => setTheme("dark")}
                      className={`
                        p-4
                        rounded-2xl
                        border
                        transition-all
                        duration-300
                        flex
                        flex-col
                        items-center
                        gap-2
                        ${
                          theme === "dark"
                            ? currentTheme.selected
                            : `border-white/10 ${currentTheme.secondary}`
                        }
                      `}
                    >
                      <Moon size={18} />
                      <span className="text-xs">Dark</span>
                    </button>

                    <button
                      onClick={() => setTheme("sunset")}
                      className={`
                        p-4
                        rounded-2xl
                        border
                        transition-all
                        duration-300
                        flex
                        flex-col
                        items-center
                        gap-2
                        ${
                          theme === "sunset"
                            ? currentTheme.selected
                            : `border-white/10 ${currentTheme.secondary}`
                        }
                      `}
                    >
                      <Flame size={18} />
                      <span className="text-xs">Sunset</span>
                    </button>

                  </div>

                </div>

                {/* Sensibilidad */}
                <div className={`rounded-2xl border border-white/10 ${currentTheme.secondary} p-4`}>

                  <div className="flex justify-between items-center mb-3">
                    <span>Sensibilidad gota</span>

                    <span className="text-white/50 text-sm">
                      {sensitivity}%
                    </span>
                  </div>

                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sensitivity}
                    onChange={(e) => setSensitivity(e.target.value)}
                    className={`w-full ${currentTheme.range}`}
                  />

                  <p className="text-white/35 text-xs mt-2">
                    Más sensibilidad = la gota baja más rápido con redes sociales.
                  </p>

                </div>

                {/* Notificaciones */}
                <button
                  onClick={() => setNotifications(!notifications)}
                  className={`w-full flex justify-between items-center rounded-2xl border border-white/10 ${currentTheme.secondary} p-4 transition-all duration-300`}
                >

                  <div className="flex items-center gap-3">
                    <Bell size={18} />
                    <span>Notificaciones inteligentes</span>
                  </div>

                  <div
                    className={`
                      w-12 h-7 rounded-full transition-all duration-300 relative
                      ${notifications ? currentTheme.switch : "bg-white/[0.14]"}
                    `}
                  >
                    <div
                      className={`
                        absolute top-1 w-5 h-5 rounded-full bg-white transition-all duration-300
                        ${notifications ? "left-6" : "left-1"}
                      `}
                    />
                  </div>

                </button>

                {/* Protección */}
                <button
                  onClick={() => setProtection(!protection)}
                  className={`w-full flex justify-between items-center rounded-2xl border border-white/10 ${currentTheme.secondary} p-4 transition-all duration-300`}
                >

                  <div className="flex items-center gap-3">
                    <Shield size={18} />
                    <span>Bloqueo anti distracción</span>
                  </div>

                  <div
                    className={`
                      w-12 h-7 rounded-full transition-all duration-300 relative
                      ${protection ? currentTheme.switch : "bg-white/[0.14]"}
                    `}
                  >
                    <div
                      className={`
                        absolute top-1 w-5 h-5 rounded-full bg-white transition-all duration-300
                        ${protection ? "left-6" : "left-1"}
                      `}
                    />
                  </div>

                </button>

                {/* IA */}
                <div className={`rounded-2xl border border-white/10 ${currentTheme.secondary} p-4`}>

                  <div className="flex items-center gap-3 mb-2">
                    <Sparkles size={18} />
                    <span>Estado IA</span>
                  </div>

                  <p className="text-white/45 text-sm">
                    La IA analizará tus hábitos para cambiar el estado de la gota automáticamente.
                  </p>

                </div>

              </div>

            </motion.div>
          )}

        </AnimatePresence>

      </div>

      {/* Navbar */}
      <div className="fixed bottom-0 left-0 w-full flex justify-center pb-8 z-50">

        <div className={`relative w-[188px] h-[68px] rounded-full border border-white/10 ${currentTheme.card} backdrop-blur-[120px] overflow-hidden shadow-[0_10px_70px_rgba(255,255,255,0.12)]`}>

          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 84 }}
            dragElastic={0.22}
            dragMomentum={false}
            style={{ x: liquidX }}
            whileTap={{ scale: 0.96 }}
            onDragEnd={(e, info) => {

              const target =
                info.offset.x > 0
                  ? "settings"
                  : "home";

              snapTo(target);
            }}
            className="absolute top-1.5 left-2 w-[86px] h-[54px] rounded-full overflow-hidden z-30 border border-white/20 bg-white/[0.15] backdrop-blur-[160px]"
          >

            <div className="absolute inset-[1px] rounded-full bg-gradient-to-b from-white/[0.45] via-white/[0.10] to-white/[0.02]" />

          </motion.div>

          <div className="relative z-10 flex h-full">

            <button
              onClick={() => snapTo("home")}
              className={`
                flex-1
                flex
                items-center
                justify-center
                transition-all
                duration-300
                ${
                  tab === "home"
                    ? "scale-110 text-white"
                    : "text-white/60"
                }
              `}
            >
              <House size={22} strokeWidth={2.4} />
            </button>

            <button
              onClick={() => snapTo("settings")}
              className={`
                flex-1
                flex
                items-center
                justify-center
                transition-all
                duration-300
                ${
                  tab === "settings"
                    ? "scale-110 text-white"
                    : "text-white/60"
                }
              `}
            >
              <Settings2 size={22} strokeWidth={2.4} />
            </button>

          </div>

        </div>

      </div>

    </main>
  );
}