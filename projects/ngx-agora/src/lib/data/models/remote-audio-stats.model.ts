export interface RemoteAudioStats {
  /**
   * Decoding type of the received audio.
   *
   * - "1": Opus.
   * - "2": AAC.
   */
  CodecType?: string;
  /**
   * End-to-end delay in ms.
   *
   * Delay from capturing to playing the audio.
   */
  End2EndDelay?: string;
  /**
   * Whether the audio is muted or not.
   * - "1": Muted.
   * - "0": Unmuted.
   */
  MuteState?: string;
  /** Packet loss rate (%) of the remote audio. */
  PacketLossRate?: string;
  /** Bitrate of the received audio, in Kbps. */
  RecvBitrate?: string;
  /** Volume of the received audio. */
  RecvLevel?: string;
  /** Total freeze time of the received audio. */
  TotalFreezeTime?: string;
  /** Total playing duration of the received audio. */
  TotalPlayDuration?: string;
  /**
   * Transport delay in ms.
   *
   * Delay from sending to receiving the audio.
   */
  TransportDelay?: string;
}
