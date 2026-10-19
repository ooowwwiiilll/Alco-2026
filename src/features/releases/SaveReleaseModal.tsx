import React, { useState, useEffect } from 'react';
import { X, Layers } from 'lucide-react';
import type { AppUser, PageTemplate, PlacedSection } from '../../types';
import { cleanComponentName } from '../../utils/format';
import { UserAvatar } from '../../components/UserAvatar';

interface SaveReleaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  placedSections: PlacedSection[];
  currentUser: AppUser;
  pageTemplates: PageTemplate[];
  activeCanvasName?: string | null;
  sourceTemplateId?: string;
  sourceTemplateName?: string;
  onSaveRelease: (input: NewReleaseInput) => Promise<void>;
}

export interface NewReleaseInput {
  name: string;
  description: string;
  sourceTemplate: PageTemplate | null;
}

export const SaveReleaseModal: React.FC<SaveReleaseModalProps> = ({
  isOpen,
  onClose,
  placedSections,
  currentUser,
  pageTemplates,
  activeCanvasName,
  sourceTemplateId,
  sourceTemplateName,
  onSaveRelease,
}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const suggestedName =
        activeCanvasName && activeCanvasName !== 'New Canvas'
          ? activeCanvasName
          : placedSections.length > 0
            ? cleanComponentName(placedSections[0]?.name)
            : 'PDP Personal';
      setName(suggestedName);
      setDescription('');
    }
  }, [isOpen, activeCanvasName, placedSections]);

  if (!isOpen) return null;

  // Resolve Template yang digunakan
  const matchedTemplate = pageTemplates.find(
    (pt) =>
      (sourceTemplateId && pt.id === sourceTemplateId) ||
      (sourceTemplateName && pt.name.toLowerCase() === sourceTemplateName.toLowerCase()),
  );

  let templateStatus: 'none' | 'pure' | 'modified' = 'none';
  let resolvedTemplateName = matchedTemplate?.name || '';

  if (matchedTemplate) {
    resolvedTemplateName = matchedTemplate.name;
    const isSameLength = placedSections.length === matchedTemplate.sections.length;
    const isSameSections =
      isSameLength &&
      placedSections.every((sec, idx) => {
        const orig = matchedTemplate.sections[idx];
        return orig && (sec.templateId === orig.templateId || sec.name === orig.name);
      });

    if (isSameLength && isSameSections) {
      templateStatus = 'pure';
    } else {
      templateStatus = 'modified';
    }
  } else {
    templateStatus = 'none';
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSaving) return;
    setIsSaving(true);
    try {
      await onSaveRelease({
        name: name.trim() || 'PDP Personal',
        description: description.trim(),
        sourceTemplate: matchedTemplate ?? null,
      });
      onClose();
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100000] bg-black/75 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200 select-none font-season-sans"
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '540px',
          maxHeight: '90vh',
          padding: '24px',
          background: '#272727',
          borderRadius: '20px',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
          gap: '24px',
          display: 'inline-flex',
        }}
        className="shadow-2xl text-white relative animate-in zoom-in-95 duration-150 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Row */}
        <div
          style={{
            alignSelf: 'stretch',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '24px',
            display: 'inline-flex',
          }}
        >
          <div
            style={{
              flex: '1 1 0',
              color: 'white',
              fontSize: '27px',
              fontFamily: "'Season Mix', serif",
              fontWeight: 420,
              wordWrap: 'break-word',
            }}
          >
            Save as Release
          </div>
          <button
            type="button"
            onClick={onClose}
            style={{
              width: '24px',
              height: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: 'white',
              padding: 0,
            }}
            className="hover:opacity-80 transition-opacity"
            title="Tutup"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Main Content Form */}
        <form
          onSubmit={handleSubmit}
          style={{
            alignSelf: 'stretch',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: '24px',
            display: 'flex',
            width: '100%',
          }}
        >
          <div
            style={{
              alignSelf: 'stretch',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: '16px',
              display: 'flex',
            }}
          >
            {/* Input 1: Nama Release */}
            <div
              style={{
                alignSelf: 'stretch',
                height: '72px',
                paddingLeft: '16px',
                paddingRight: '16px',
                paddingTop: '12px',
                paddingBottom: '12px',
                background: '#202020',
                borderRadius: '12px',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                display: 'flex',
              }}
            >
              <div
                style={{
                  alignSelf: 'stretch',
                  color: 'rgba(255, 255, 255, 0.50)',
                  fontSize: '12px',
                  fontFamily: 'Season Sans, sans-serif',
                  fontWeight: 400,
                  lineHeight: '18px',
                  wordWrap: 'break-word',
                }}
              >
                Nama Release
              </div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="PDP Personal"
                style={{
                  alignSelf: 'stretch',
                  color: 'white',
                  fontSize: '16px',
                  fontFamily: 'Season Sans, sans-serif',
                  fontWeight: 400,
                  lineHeight: '24px',
                  wordWrap: 'break-word',
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  width: '100%',
                  marginTop: '2px',
                }}
                autoFocus
              />
            </div>

            {/* Input 2: Deskripsi (Optional) */}
            <div
              style={{
                alignSelf: 'stretch',
                height: '72px',
                paddingLeft: '16px',
                paddingRight: '16px',
                paddingTop: '12px',
                paddingBottom: '12px',
                background: '#202020',
                borderRadius: '12px',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                display: 'flex',
              }}
            >
              <div
                style={{
                  alignSelf: 'stretch',
                  color: 'rgba(255, 255, 255, 0.50)',
                  fontSize: '12px',
                  fontFamily: 'Season Sans, sans-serif',
                  fontWeight: 400,
                  lineHeight: '18px',
                  wordWrap: 'break-word',
                }}
              >
                Deskripsi (Optional)
              </div>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Product detail page untuk personal"
                style={{
                  alignSelf: 'stretch',
                  color: 'white',
                  fontSize: '16px',
                  fontFamily: 'Season Sans, sans-serif',
                  fontWeight: 400,
                  lineHeight: '24px',
                  wordWrap: 'break-word',
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  width: '100%',
                  marginTop: '2px',
                }}
              />
            </div>

            {/* Releaser Info Block */}
            <div
              style={{
                alignSelf: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: '4px',
                display: 'flex',
              }}
            >
              <div
                style={{
                  color: 'rgba(255, 255, 255, 0.50)',
                  fontSize: '14px',
                  fontFamily: 'Season Sans, sans-serif',
                  fontWeight: 400,
                  lineHeight: '20px',
                  letterSpacing: '0.28px',
                  wordWrap: 'break-word',
                }}
              >
                Releaser
              </div>
              <div
                style={{
                  alignSelf: 'stretch',
                  paddingTop: '10px',
                  paddingBottom: '10px',
                  borderRadius: '12px',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  gap: '16px',
                  display: 'inline-flex',
                }}
              >
                <UserAvatar
                  name={currentUser.name}
                  seed={currentUser.id || currentUser.name}
                  size={40}
                />
                <div
                  style={{
                    flex: '1 1 0',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    display: 'inline-flex',
                  }}
                >
                  <div
                    style={{
                      color: 'white',
                      fontSize: '14px',
                      fontFamily: 'Season Sans, sans-serif',
                      fontWeight: 400,
                      lineHeight: '20px',
                      letterSpacing: '0.28px',
                      wordWrap: 'break-word',
                    }}
                  >
                    {currentUser.name}
                  </div>
                  <div
                    style={{
                      color: 'rgba(255, 255, 255, 0.50)',
                      fontSize: '12px',
                      fontFamily: 'Season Sans, sans-serif',
                      fontWeight: 400,
                      lineHeight: '20px',
                      letterSpacing: '0.24px',
                      wordWrap: 'break-word',
                    }}
                  >
                    {currentUser.email}
                  </div>
                </div>
                <div
                  style={{
                    color: 'rgba(255, 255, 255, 0.50)',
                    fontSize: '12px',
                    fontFamily: 'Season Sans, sans-serif',
                    fontWeight: 400,
                    lineHeight: '20px',
                    letterSpacing: '0.24px',
                    wordWrap: 'break-word',
                  }}
                >
                  {currentUser.division}
                </div>
              </div>
            </div>

            {/* Template yang digunakan Block (Dynamic per condition) */}
            {templateStatus === 'pure' && (
              <div
                style={{
                  alignSelf: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  gap: '4px',
                  display: 'flex',
                }}
              >
                <div
                  style={{
                    color: 'rgba(255, 255, 255, 0.50)',
                    fontSize: '14px',
                    fontFamily: 'Season Sans, sans-serif',
                    fontWeight: 400,
                    lineHeight: '20px',
                    letterSpacing: '0.28px',
                    wordWrap: 'break-word',
                  }}
                >
                  Template yang digunakan
                </div>
                <div
                  style={{
                    alignSelf: 'stretch',
                    paddingTop: '10px',
                    paddingBottom: '10px',
                    borderRadius: '12px',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: '16px',
                    display: 'inline-flex',
                  }}
                >
                  <div
                    style={{
                      flex: '1 1 0',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      gap: '16px',
                      display: 'flex',
                    }}
                  >
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        position: 'relative',
                        background: '#686868',
                        overflow: 'hidden',
                        borderRadius: '8px',
                        flexShrink: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Layers className="w-5 h-5 text-white/60" />
                    </div>
                    <div
                      style={{
                        flex: '1 1 0',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        gap: '8px',
                        display: 'flex',
                      }}
                    >
                      <div
                        style={{
                          color: 'white',
                          fontSize: '14px',
                          fontFamily: 'Season Sans, sans-serif',
                          fontWeight: 400,
                          lineHeight: '24px',
                          letterSpacing: '0.28px',
                          wordWrap: 'break-word',
                        }}
                      >
                        {resolvedTemplateName || 'Nama Template'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {templateStatus === 'modified' && (
              <div
                style={{
                  alignSelf: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  gap: '4px',
                  display: 'flex',
                }}
              >
                <div
                  style={{
                    color: 'rgba(255, 255, 255, 0.50)',
                    fontSize: '14px',
                    fontFamily: 'Season Sans, sans-serif',
                    fontWeight: 400,
                    lineHeight: '20px',
                    letterSpacing: '0.28px',
                    wordWrap: 'break-word',
                  }}
                >
                  Template yang digunakan
                </div>
                <div
                  style={{
                    alignSelf: 'stretch',
                    paddingTop: '10px',
                    paddingBottom: '10px',
                    borderRadius: '12px',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: '16px',
                    display: 'inline-flex',
                  }}
                >
                  <div
                    style={{
                      flex: '1 1 0',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      gap: '16px',
                      display: 'flex',
                    }}
                  >
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        position: 'relative',
                        background: '#686868',
                        overflow: 'hidden',
                        borderRadius: '8px',
                        flexShrink: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Layers className="w-5 h-5 text-white/60" />
                    </div>
                    <div
                      style={{
                        flex: '1 1 0',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        gap: '8px',
                        display: 'flex',
                      }}
                    >
                      <div
                        style={{
                          color: 'white',
                          fontSize: '14px',
                          fontFamily: 'Season Sans, sans-serif',
                          fontWeight: 400,
                          lineHeight: '24px',
                          letterSpacing: '0.28px',
                          wordWrap: 'break-word',
                        }}
                      >
                        {resolvedTemplateName || 'Nama Template'}
                      </div>
                      <div
                        style={{
                          paddingLeft: '8px',
                          paddingRight: '8px',
                          background: 'black',
                          borderRadius: '100px',
                          justifyContent: 'center',
                          alignItems: 'center',
                          gap: '10px',
                          display: 'flex',
                        }}
                      >
                        <div
                          style={{
                            color: 'white',
                            fontSize: '12px',
                            fontFamily: 'Season Sans, sans-serif',
                            fontWeight: 400,
                            lineHeight: '20px',
                            letterSpacing: '0.24px',
                            wordWrap: 'break-word',
                          }}
                        >
                          Modified
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {templateStatus === 'none' && (
              <div
                style={{
                  alignSelf: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  gap: '4px',
                  display: 'inline-flex',
                }}
              >
                <div
                  style={{
                    color: 'rgba(255, 255, 255, 0.50)',
                    fontSize: '14px',
                    fontFamily: 'Season Sans, sans-serif',
                    fontWeight: 400,
                    lineHeight: '20px',
                    letterSpacing: '0.28px',
                    wordWrap: 'break-word',
                  }}
                >
                  Template yang digunakan
                </div>
                <div
                  style={{
                    width: '100%',
                    height: '24px',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: '16px',
                    display: 'inline-flex',
                  }}
                >
                  <div
                    style={{
                      flex: '1 1 0',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      gap: '8px',
                      display: 'flex',
                    }}
                  >
                    <div
                      style={{
                        color: 'white',
                        fontSize: '14px',
                        fontFamily: 'Season Sans, sans-serif',
                        fontWeight: 400,
                        lineHeight: '24px',
                        letterSpacing: '0.28px',
                        wordWrap: 'break-word',
                      }}
                    >
                      No template (Desain Baru)
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Divider Line */}
          <div
            style={{
              alignSelf: 'stretch',
              height: '0px',
              outline: '1px #353535 solid',
              outlineOffset: '-0.50px',
            }}
          />

          {/* Submit Action Button Row */}
          <div
            style={{
              alignSelf: 'stretch',
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <button
              type="submit"
              disabled={!name.trim() || isSaving}
              style={{
                width: '180px',
                paddingLeft: '16px',
                paddingRight: '16px',
                paddingTop: '12px',
                paddingBottom: '12px',
                background: 'white',
                borderRadius: '76px',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '8px',
                display: 'inline-flex',
                cursor: name.trim() ? 'pointer' : 'not-allowed',
                opacity: name.trim() ? 1 : 0.5,
                border: 'none',
              }}
              className="hover:opacity-90 active:scale-95 transition-all select-none shadow-md"
            >
              <div
                style={{
                  textAlign: 'center',
                  color: 'black',
                  fontSize: '16px',
                  fontFamily: 'Season Sans, sans-serif',
                  fontWeight: 400,
                  wordWrap: 'break-word',
                }}
              >
                Simpan
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
