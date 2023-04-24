import "./BannerWithRing.scss";

interface BannerWithRingProps {
  additionalCSSClass: string;
  tournamentName: string;
  tournamentPrize: string;
  tournamentBanner: string;
  tournamentDate: string;
  tournamentAdditionalInfo: string;
}

// ------ COMPONENT: START ------ //

export default function BannerWithRing(props: BannerWithRingProps) {
  const applicableCSSClasses = `banner-with-ring ${props.additionalCSSClass}`;

  return (
    <span className={applicableCSSClasses}>
      <img
        className="banner-with-ring__background-image"
        src={props.tournamentBanner}
        alt="Banner for a tournament."
      />
      <p className="banner-with-ring__tournament-name">
        {props.tournamentName}
      </p>
      <p className="banner-with-ring__tournament-prize">
        {props.tournamentPrize}
      </p>
      <p className="banner-with-ring__tournament-additional-info">
        {props.tournamentAdditionalInfo}
      </p>
      <span className="banner-with-ring__tournament-date-wrapper">
        <p className="banner-with-ring__tournament-date-wrapper__date">
          {props.tournamentDate}
        </p>
      </span>
    </span>
  );
}

// ------ COMPONENT: END ------ //
