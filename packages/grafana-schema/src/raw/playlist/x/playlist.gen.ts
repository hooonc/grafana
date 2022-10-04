// This file is autogenerated. DO NOT EDIT.
//
// Generated by pkg/framework/coremodel/gen.go
//
// Derived from the Thema lineage declared in pkg/coremodel/playlist/coremodel.cue
//
// Run `make gen-cue` from repository root to regenerate.

export interface Playlist {
  /**
   * Unique playlist identifier for internal use, set by Grafana.
   */
  id: number;
  /**
   * Interval sets the time between switching views in a playlist.
   * FIXME: Is this based on a standardized format or what options are available? Can datemath be used?
   */
  interval: string;
  /**
   * The ordered list of items that the playlist will iterate over.
   */
  items?: Array<{
    /**
     * FIXME: The prefixDropper removes playlist from playlist_id, that doesn't work for us since it'll mean we'll have Id twice.
     * ID of the playlist item for internal use by Grafana. Deprecated.
     */
    id: number;
    /**
     * PlaylistID for the playlist containing the item. Deprecated.
     */
    playlistid: number;
    /**
     * Type of the item.
     */
    type: ('dashboard_by_uid' | 'dashboard_by_id' | 'dashboard_by_tag');
    /**
     * Value depends on type and describes the playlist item.
     * 
     *  - dashboard_by_id: The value is an internal numerical identifier set by Grafana. This
     *  is not portable as the numerical identifier is non-deterministic between different instances.
     *  Will be replaced by dashboard_by_uid in the future.
     *  - dashboard_by_tag: The value is a tag which is set on any number of dashboards. All
     *  dashboards behind the tag will be added to the playlist.
     */
    value: string;
    /**
     * Title is the human-readable identifier for the playlist item.
     */
    title: string;
    /**
     * Order is the position in the list for the item. Deprecated.
     */
    order: number;
  }>;
  /**
   * Name of the playlist.
   */
  name: string;
  /**
   * Unique playlist identifier. Generated on creation, either by the
   * creator of the playlist of by the application.
   */
  uid: string;
}

export const defaultPlaylist: Partial<Playlist> = {
  interval: '5m',
  items: [],
};