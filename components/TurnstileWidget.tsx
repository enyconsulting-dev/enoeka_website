"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

type TurnstileRenderOptions = {
  sitekey: string;
  action: string;
  theme: "auto";
  callback: (token: string) => void;
  "expired-callback": () => void;
  "error-callback": () => void;
};

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: TurnstileRenderOptions
      ) => string;
      remove: (widgetId: string) => void;
    };
  }
}

type Props = {
  action: "contact" | "speaking";
  resetKey: number;
  onTokenChange: (token: string | null) => void;
};

export function TurnstileWidget({ action, resetKey, onTokenChange }: Props) {
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const containerRef = useRef<HTMLDivElement>(null);
  const onTokenChangeRef = useRef(onTokenChange);
  const [scriptReady, setScriptReady] = useState(false);
  const [loadError, setLoadError] = useState(false);

  onTokenChangeRef.current = onTokenChange;

  useEffect(() => {
    if (!scriptReady || !siteKey || !containerRef.current || !window.turnstile) {
      return;
    }

    setLoadError(false);
    onTokenChangeRef.current(null);
    const widgetId = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      action,
      theme: "auto",
      callback: (token) => onTokenChangeRef.current(token),
      "expired-callback": () => onTokenChangeRef.current(null),
      "error-callback": () => {
        onTokenChangeRef.current(null);
        setLoadError(true);
      },
    });

    return () => {
      window.turnstile?.remove(widgetId);
    };
  }, [action, resetKey, scriptReady, siteKey]);

  return (
    <div>
      {siteKey && (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
          strategy="afterInteractive"
          onReady={() => setScriptReady(true)}
          onError={() => setLoadError(true)}
        />
      )}
      <div ref={containerRef} />
      {!siteKey && (
        <p className="text-sm text-red-600">
          Security check is not configured. Please try again later.
        </p>
      )}
      {loadError && (
        <p className="text-sm text-red-600">
          Security check could not load. Please refresh and try again.
        </p>
      )}
    </div>
  );
}
