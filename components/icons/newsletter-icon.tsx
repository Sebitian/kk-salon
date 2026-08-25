type NewsletterIconProps = {
  className?: string
}

export default function NewsletterIcon({ className }: NewsletterIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M4 7.5h16" />
      <path d="M4 7.5 12 13.25 20 7.5" />
      <path d="M4 7.5v9h8.25" />
      <path d="M20 7.5v6" />
      <g transform="translate(16.5 15.5) scale(0.78) translate(-12 -12)">
        <path
          fill="currentColor"
          stroke="none"
          d="M9.937 15.5A2 2 0 0 0 8.5 14.062l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.938A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .962 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
        />
      </g>
    </svg>
  )
}
